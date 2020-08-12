const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  registration: { type: Number, require: true },
  name: { type: String, require: true },
  turma: { type: String, require: true },
  senha: { type: Number, require: true },
  token: { type: String },
  role: { type: String, default: 'user', require: true },
});

module.exports = mongoose.model('User', UserSchema);
