let Validator = require('validatorjs');
const newUserValidationRules = require('./validationModels');
let data1 = {
  bio: {
    name: {
      firstName: 'Rhian Castro',
      lastName: 'Castro',
    },
    age: '24',
    birthday: 'Mon Aug 17 2020 14:20:46 GMT-0300 (Horário Padrão de Brasília)',
  },
  address: {
    street: 'Av. Pinhal, 319',
    city: 'Macapá',
    state: 'Amapá',
    country: 'Brasil',
  },

  email: 'rhi.castro@gmail.coml',
  password: 'tes512fawfaw',
};

const validate = new Validator(data1, newUserValidationRules);
console.log(newUserValidationRules, data1);
console.log(validate.passes());
console.log(validate.errors);
