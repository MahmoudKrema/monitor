const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client.html");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

export default io;
