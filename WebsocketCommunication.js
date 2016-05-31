//Using the Google Chrome Developer Tools, developers can inspect the WebSocket handshake as well as the WebSocket frames.

function WebSocketTest()
{
    {
        // Let us open a web socket
        var ws = new WebSocket("ws://localhost:9998/echo");

        ws.onopen = function()
        {
            // Web Socket is connected, send data using send()
            ws.send("Message to send");
            alert("Message is sent...");
        };

        ws.onmessage = function (evt)
        {
            var received_msg = evt.data;
            alert("Message is received...");
        };

        ws.onclose = function()
        {
            // websocket is closed.
            alert("Connection is closed...");
        };
    }


//    Short socketIO Example:

//    Client request (just like in HTTP, each line ends with \r\n and there must be an extra blank line at the end):

// Create SocketIO instance, connect
    var socket = new io.Socket('localhost',{
        port: 8080
    });
socket.connect();

// Add a connect listener
socket.on('connect',function() {
    console.log('Client has connected to the server!');
});
// Add a message listener
socket.on('message',function(data) {
    console.log('Received a message from the server!',data);
});
// Add a disconnect listener
socket.on('disconnect',function() {
    console.log('The client has disconnected!');
});

// Sends a message to the server via sockets
function sendMessageToServer(message) {
    socket.send(message);
}
