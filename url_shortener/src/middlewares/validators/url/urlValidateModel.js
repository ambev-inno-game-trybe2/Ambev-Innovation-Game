const Validator = require('validatorjs');
const newUrlValidateModel = require('./urlValidator');

const validateNewUrl = (req, res, next) => {
  const validate = new Validator(req.body, newUrlValidateModel);
  if (validate.passes() === true) {
    next();
  }
  if (validate.errors.Errors) {
    return res.json(validate.errors).status(201);
  }
};

module.exports = validateNewUrl;
