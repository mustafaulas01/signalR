$(document).ready(function(){

    const broadcastMessageToAllClientHubMethodCall="BroadcastMessageToAllClient";

    const receiveMessageForAllClientClientMethodCall="ReceiveMessageAllClients";


    const connection=new signalR.HubConnectionBuilder().withUrl("/examplehub").configureLogging(signalR.LogLevel.Information).build();


function start() {

connection.start().then(()=>console.log("Hub ile bağlantı kuruldu"));
}

try 
{
    start();
} catch (error) {
    setTimeout(()=>start(),5000)
}




connection.on(receiveMessageForAllClientClientMethodCall,(message)=> {
    console.log("Gelen Mesaj",message);
})

$('#btn-send-message-all-client').click(function() {

    const message="Hello world";
    connection.invoke(broadcastMessageToAllClientHubMethodCall,message).catch(err=>console.error("hata :"+err));

})

})
