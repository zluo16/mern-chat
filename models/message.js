const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  local: {
    _id: { type: mongoose.Schema.Types.ObjectId },
    timestamp: { type: Date, default: Date.now }
    sender: { type: String, required: true },
    chatRoom: { type: String, required: true },
    body: { type: String, required: true }
  }
});

module.exports = mongoose.model('Message', messageSchema);
