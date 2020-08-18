const Validator = require('validatorjs');
const newIngredientValidationRules = require('./recipeModel');
const validateRecipe = (req, res, next) => {
  const validate = new Validator(req.body, newIngredientValidationRules);
  if (validate.passes() === true) {
    next();
  }
  if (validate.errors.Errors) {
    return res.json(validate.errors).status(201);
  }
};

module.exports = validateRecipe;
