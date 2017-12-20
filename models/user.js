const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  user: {
    username: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    messages: [ { type: String }, ],
    isSignedIn: { type: Boolean, default: false }
  }
})

userSchema.methods.genPassHash = function(password) {
  return bcrypt.hashSync(password, genSaltSync(10))
}

userSchema.methods.validatePassword = function(password) {
  return bcrypt.campareSync(password, this.user.password)
}

module.exports = mongoose.model('User', userSchema)
