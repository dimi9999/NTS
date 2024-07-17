using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.Text;

namespace nts.graph
{
    public class NTS_graph
    {
        private readonly ILogger<NTS_graph> _logger;
        private readonly IGraphHelper _graphHelper;
        //TODO: Cannot resolve the DI 
        public NTS_graph(ILogger<NTS_graph> logger, IGraphHelper graphHelper)
        {
            _logger = logger;
            _graphHelper = graphHelper;
        }
        
        [FunctionName("GET_NTS_USER")]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req)
        {
            _logger.LogInformation("Function Triggered");

            string pinRequestGet = req.Query["pin"];

            // Get request body data
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            string? pRequest = data?.pin != null ? data?.pin : pinRequestGet;

            byte[] key = Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("AES_SECRET"));
            byte[] sentBytes = Convert.FromBase64String(pRequest);

            byte[] decryptedBytes = Decrypt(sentBytes, key);

            string pinRequest = "";
            try
            {
                pinRequest = Encoding.UTF8.GetString(decryptedBytes);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            if (pinRequest == null)
            {
                _logger.LogError("PIN is not present in query");
                throw new Exception("Error: PIN is required in query");
            }

            try
            {
                //Get the graph service client from the helper function
                GraphServiceClient _gsc = _graphHelper.GetGraphServiceClient();
           
                //Using the site and list, filter for the pin and expand on the fields required
                var items = await _gsc.Sites[Environment.GetEnvironmentVariable("SITE_ID")]
                                      .Lists[Environment.GetEnvironmentVariable("CMS_LIST_ID")]
                                      .Items.GetAsync((rc) => {
                                          rc.QueryParameters.Expand = new string[] { "fields($select=A002A,A003_x002d_CMLookupId,Status_x002d_SubStatus,Status_x002d_Description)" };
                                          rc.QueryParameters.Filter = $"fields/Frontendaccess eq '{pinRequest}'";
                                      });

                //Item has been returned therefore further processing required
                if(items.Value.Count > 0)
                {
                    _logger.LogInformation("Case Found");
                    //From JSON response all items are stored in "Additional data" field
                    //Only one item should be returned from get request as pin is unique so use .First() to retrieve first object
                    var _ = items.Value.First().Fields.AdditionalData;

                    //Access the user id using items[ysers lookup id ?]
                    var user = await _gsc.Sites[Environment.GetEnvironmentVariable("SITE_ID")]
                                            .Lists[Environment.GetEnvironmentVariable("USER_LIST_ID")]
                                            .Items[_["A003_x002d_CMLookupId"].ToString()].GetAsync();

                    if (user.Id.Length > 0)
                    {
                        _logger.LogInformation("User Found");
                        //Remap into a JObject with the correct property names
                        JObject person = new(
                                new JProperty("Status", _["A002A"]),
                                //new JProperty("Status_Sub", _["Status_x002d_SubStatus"]),
                                new JProperty("Status_Desc", _["Status_x002d_Description"]),
                                new JProperty("CM", user.Fields.AdditionalData["Title"]),
                                //new JProperty("CM_UPN", user.Fields.AdditionalData["CaseManagerEmail"]),
                                new JProperty("CM_Phone", user.Fields.AdditionalData["CaseManagerPhoneNo"])
                            );
                        return new OkObjectResult(person);
                    } 
                    else
                    {
                        throw new Exception("Case Manager email could not be found");
                    }
                }
                else
                {
                    return new NotFoundObjectResult("Resource with provided PIN not found");
                }
            } 
            catch(Exception ex) 
            {
                _logger.LogError(ex.Message);
                return new BadRequestObjectResult(ex.Message);
            }

        }

        static byte[] Decrypt(byte[] cipherBytes, byte[] key)
        {
            byte[] decryptedBytes = null;

            // Set up the encryption objects
            using (Aes aes = Aes.Create())
            {
                aes.Key = key;
                aes.Mode = CipherMode.ECB;
                aes.Padding = PaddingMode.PKCS7;

                // Decrypt the input ciphertext using the AES algorithm
                using (ICryptoTransform decryptor = aes.CreateDecryptor())
                {
                    try
                    {
                        decryptedBytes = decryptor.TransformFinalBlock(cipherBytes, 0, cipherBytes.Length);
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                    }
                }
            }

            return decryptedBytes;
        }
    }
}
