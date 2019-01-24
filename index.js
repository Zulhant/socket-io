var express = require('express');
var socket = require('socket.io');

var app = express();

let server = app.listen(3011, () => {
  console.log("server running")
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection', (socket) => {

  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  })
  // console.log("socket connected", conn.id);
})
