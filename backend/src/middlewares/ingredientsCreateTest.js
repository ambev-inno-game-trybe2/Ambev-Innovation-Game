let Validator = require('validatorjs');
const newIngredientValidationRules = require('./ingredientModel');
let data1 = {
  name: 'Maçã',
  category: 'fruta',
  slug: ['apple', "lol'"],
};

const validate = new Validator(data1, newIngredientValidationRules);
console.log(newIngredientValidationRules, data1);
console.log(validate.passes());
console.log(validate.errors);
