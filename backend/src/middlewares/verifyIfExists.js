const User = require('../models/User');
const verifyIfUserExists = async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  const user = await User.find({ email });
  if (user.length === 0) {
    next();
  }
  return res.json({ message: 'User already exists!' });
};

module.exports = verifyIfUserExists;
