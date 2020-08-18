module.exports = newIngredientValidationRules = {
  name: 'string|required|min:4|max:12',
  slug: 'required|array',
  category: 'required|string|min:4|max:12',
};
