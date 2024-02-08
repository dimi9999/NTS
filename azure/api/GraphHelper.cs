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
                Environment.GetEnvironmentVariable("TENANT-ID"),
                Environment.GetEnvironmentVariable("CLIENT-ID"),
                Environment.GetEnvironmentVariable("CLIENT-SECRET")
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