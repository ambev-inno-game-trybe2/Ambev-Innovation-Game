const Validator = require('validatorjs');
const newUserValidationRules = require('./userModel');
const validateUserModel = (req, res, next) => {
  const validate = new Validator(req.body, newUserValidationRules);
  if (validate.passes() === true) {
    next();
  }
  if (validate.errors.Errors) {
    console.log(typeof validate.errors);

    return res.json(validate.errors).status(201);
  }
};

module.exports = validateUserModel;
