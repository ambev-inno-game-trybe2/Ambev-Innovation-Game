const User = require('../models/User');

const verifyIfUserExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.find({ email });
  if (user.length === 0) {
    next();
  }
  if (user.length !== 0) {
    return res.json({ message: 'User already exists!' });
  }
};

module.exports = verifyIfUserExists;
