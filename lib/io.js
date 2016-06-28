var io = require('socket.io')();

io.on('connection', function (socket) {
  socket.on('server', function (data) {
    console.log(data);
    io.sockets.emit(data.room + data.to, data.info)
  })
})

module.exports = io;
