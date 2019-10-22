const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  gender: {
    type: String
  },
  googleId: {
    type: String
  },
  twitchId: {
    type: String
  }
});
UserSchema.plugin(findOrCreate)/* Добавление метода  */

const User = mongoose.model('User', UserSchema);

module.exports = User;
