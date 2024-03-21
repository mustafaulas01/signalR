using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace client.Hubs
{
    public class ExampleHub:Hub
    {
        public async Task BroadcastMessageToAllClient(string message)
        {
            //javascript tarafında çalışacak method ismi
          await Clients.All.SendAsync("ReceiveMessageAllClients",message);
        }
    }
}