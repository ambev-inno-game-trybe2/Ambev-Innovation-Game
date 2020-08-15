const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: { type: String, require: true },
  likeCount: { type: Number, default: 0 },
  favCount: { type: Number, default: 0 },
  recipeIngredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tasteCategory: [{ type: String, require: true }],
});

module.exports = mongoose.model('Recipe', RecipeSchema);
