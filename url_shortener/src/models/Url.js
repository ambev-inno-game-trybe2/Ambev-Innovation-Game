const mongoose = require('mongoose');

const ShortUrlSchema = new mongoose.Schema({
  origin: { type: String, require: true, min: 1, max: 60 },
  destination: { type: String, require: true, min: 8, max: 64 },
  userId: { type: String },
  recipeId: { type: String }, 
});

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);
