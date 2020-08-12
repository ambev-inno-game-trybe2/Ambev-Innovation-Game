const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: { type: String, require: true },
  likesCount: {type: Number},
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slugs: [{type: String}]
});

module.exports = mongoose.model('Ingredient', IngredientSchema);