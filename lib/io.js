// see bin/www for where to attach this io instance to the app
var io = require('socket.io')();
var i = 0;

io.on('connection', function (socket) {
  socket.on('client', function (data) {
    io.sockets.emit('client', data)
  })
  socket.on('everyone', function (data){
    io.sockets.emit('every', data)
  })
})

module.exports = io;
