const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {type:String, require: true},
  url: String,
  genres: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  target_class: String,
});

module.exports = mongoose.model('Book', BookSchema);
