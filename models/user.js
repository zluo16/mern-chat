const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  local: {
    _id: { type: mongoose.Schema.Types.ObjectId },
    username: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    chatRooms: [ { type: String }, ],
    isSignedIn: { type: Boolean, default: false }
  }
})

userSchema.methods.genPassHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.isValidPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('User', userSchema)
