const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * @function
 * @description Generate user's JWT token from e-mail.
 * @namespace generateToken
 * @method
 * @param {String} E-mail - User's email.
 * @returns {Object} - Generated JWT token.
 */
const generateToken = (email) => {
  const token = jwt.sign({ email }, process.env.SECRET, {
    expiresIn: 300, // expires in 5min
  });
  return token;
};

module.exports = generateToken;
