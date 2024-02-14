using Azure.Identity;
using Microsoft.Graph;
using System;

public interface IGraphHelper
{
    GraphServiceClient GetGraphServiceClient();
}

public class GraphHelper : IGraphHelper, IDisposable
{
    private readonly GraphServiceClient _gsc;
    public GraphHelper()
    {
        ClientSecretCredential _credentials = new(
                Environment.GetEnvironmentVariable("TENANT_ID"),
                Environment.GetEnvironmentVariable("CLIENT_ID"),
                Environment.GetEnvironmentVariable("CLIENT_SECRET")
            );

        _gsc = new GraphServiceClient( _credentials, new[] { "https://graph.microsoft.com/.default" });

    }

    public GraphServiceClient GetGraphServiceClient()
    { 
        return _gsc;
    }

    public void Dispose()
    {
        GC.SuppressFinalize(this);
        _gsc.Dispose();
    }
}