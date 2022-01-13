const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
//how can I handle cors here
const { Server } = require("socket.io")
// (httpServer, {
//     cors: {
//       origin: '*',
//     }
//   });
const io = new Server(server);
const electron = require('electron');
const {ipcRenderer} = electron;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/client.html");
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
let x = '9';
// io.emit('sending', { someProperty: x, otherProperty: 'other value' });

io.on("connection", (socket) => {
    socket.emit("hello", x);
  });

  
//   ipcRenderer.on('sendToSocket', (event, testData) => {
//     console.log(testData);
//     // let li = document.createElement("li");
//     // li.appendChild(document.createTextNode(theToDo));
//     // theList.appendChild(li);
// });
console.log("testttt:"+ ' ' + electron.ipcRenderer);