module.exports = newUrlValidateModel = {
  origin: 'string|required|min:4|max:12',
  destination: 'required|required',
  userId: 'required|string|min:4|max:12',
  recipeId: 'required|string|min:4|max:12',
};