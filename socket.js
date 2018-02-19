const passportSocketIo = require('passport.socketio');
const debug = require('debug')('sockets');
const models = require('./models');

module.exports = (config, io) => {
  // Connect to sockets
  io.sockets.on('connection', (socket) => {

    // Users connected to the client
    const connectedUsers = passportSocketIo.filterSocketsByUser(io, (user) => {
      return user === socket.request.user;
    });

    socket.on('enter', (room) => {
      models.ChatRooms.findOne({ 'local._id': room }).exec()
        .then(room => {
          let messages = models.Messages.find({ 'local.chatRoom': room ._id});
          socket.emit('messages', messages);
        });
    })

    socket.on('message', (message) => {
      // Check if chat room was added to message
      if (!message.chatRoom) {
        debug('No channel was selected');
        return
      }
      // Check if Body is empty
      if (!message.body) {
        debug('No text in message');
        return
      }
      //If everything passes, create new message
      const newMessage = new models.Message()

      newMessage.user = socket.request.user
      newMessage.body = message.body
      newMessage.chatRoom = message.chatRoom

      newMessage.save()
    })
  })
}
