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

    socket.on('enter', (user) => {
      models.ChatRooms.findOne({ 'local.users': [socket.request.user, user] }).exec()
        .then(room => {
          if (!room) {
            let newRoom = new models.ChatRoom()
            newRoom.users = [ socket.request.user, user ];
            socket.emit('messages', []);
          } else {
            models.Message.find({ 'local.chatRoom': room._id }).exec()
              .then(messages => {
                socket.emit('messages', messages);
              })
          }
        });
    });

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

      socket.emit('message', newMessage);
    });
  });
}
