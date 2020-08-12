const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: { type: String, require: true },
  likeCount: {type: Number},
  recipeIngredients: [
    { type: Schema.Types.ObjectId, ref: 'Ingredients' }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
