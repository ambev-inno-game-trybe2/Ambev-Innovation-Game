const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {type: String, require: true},
  name: { type: String, require: true },
  senha: { type: Number, require: true },
  token: { type: String },
  role: { type: String, default: 'user', require: true },
});

module.exports = mongoose.model('User', UserSchema);
