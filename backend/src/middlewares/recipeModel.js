module.exports = newIngredientValidationRules = {
  title: 'string|required|min:4|max:12',
  recipeIngredients: 'required|array',
  tasteCategory: 'required|array',
};
