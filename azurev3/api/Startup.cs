using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;

[assembly: FunctionsStartup(typeof(nts.graph.Startup))]
namespace nts.graph
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {

            builder.Services.AddLogging();
            builder.Services.AddSingleton<IGraphHelper, GraphHelper>();
        }
    }
}