const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  local: {
    timestamp: { type: Date, default: Date.now },
    user: { type: String, required: true },
    chatRoom: { type: String, required: true },
    body: { type: String, required: true }
  }
});

module.exports = mongoose.model('Message', messageSchema);
