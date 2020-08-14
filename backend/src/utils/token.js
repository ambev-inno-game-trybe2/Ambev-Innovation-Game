const jwt = require('jsonwebtoken');
require('dotenv').config();
const generateToken = (email) => {
  var token = jwt.sign({ email }, process.env.SECRET, {
    expiresIn: 300, // expires in 5min
  });
  return token;
};

module.exports = generateToken;
