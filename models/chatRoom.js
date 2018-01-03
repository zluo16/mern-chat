const mongoose = require('mongoose');

const chatRoomSchema = mongoose.Schema({
  local: {
    _id: { type: mongoose.Schema.Types.ObjectId },
    users: [ { type: String }, ]
  }
});

module.exports = mongoose.model('ChatRoom', chatRoomSchema);
