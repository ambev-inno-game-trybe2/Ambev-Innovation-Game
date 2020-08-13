let Validator = require('validatorjs');
const newUserValidationRules = require('./validationModels');
let data1 = {
  bio: {
    name: {
      firstName: 'Rhian Castro',
      lastName: 'Castro',
      age: '24',
      birthday: 01091995,
    },
  },
  address: {
    street: 'Av. Pinhal, 319',
    city: 'Macapá',
    state: 'Amapá',
    country: 'Brasil',
  },

  email: 'rhi.castro@gmail.coml',
  password: 'test1512',
};

let validate = new Validator(data1, newUserValidationRules);
console.log(newUserValidationRules, data1);
console.log(validate.passes());
console.log(validate.errors);
