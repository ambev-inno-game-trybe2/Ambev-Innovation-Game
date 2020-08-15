const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: { type: String, require: true },
  likesCount: { type: Number },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: [{ type: String, require: true }],
  slug: [{ type: String }],
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
