const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

io.on("connection", (socket) => {
  socket.emit("your id", socket.io);
  socket.on("message", ({ message }) => {
    io.emit("message", { message });
  });
});
server.listen(4000, () => console.log("server is running on port 4000"));
