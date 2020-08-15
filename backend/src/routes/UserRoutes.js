require('dotenv').config();
var express = require('express');
var router = express.Router();
const User = require('../models/User');
const generateToken = require('../utils/token');
const hashNow = require('../utils/hash');
const decryptHash = require('../utils/hash');
const verifyJWT = require('../middlewares/verifyJWT');

const createUser = async (req, res) => {
  const { email, bio, address, password } = req.body;
  const userExists = await User.find({ email });
  const token = generateToken(email);
  if (!email) {
    return res.json({ message: 'error' });
  }
  if (userExists.length === 0) {
    const user = await User.create({ email, bio, address, password, token: token });
    return res.json({ message: 'Usuário criado!', user }).status(201);
  }
  return res.json({
    email,
    message: 'Email already exists',
  });
};

const loginRoute = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user.email === email && decryptHash(user.password) === password) {
    return res.json({ token: user.token, auth: 'true' });
  }
  res.json({ message: 'Usuário ou senha inválidos!' });
};

const deleteUser = async (req, res) => {
  const { _id } = req.body;
  const user = await User.deleteOne({ _id });
  return res.json({ message: 'User deleted!', user }).status(410);
};

const updateUser = async (req, res) => {
  const { _id, update } = req.body;
  try {
    const user = await Recipe.findByIdAndUpdate(_id, update, { new: true });
    return res.json({ user }).send(200);
  } catch (error) {
    res.json({ message: error });
  }
};

router.post('/', createUser);
router.delete('/', verifyJWT, deleteUser);
router.patch('/', updateUser);
router.get('/login', loginRoute);

module.exports = router;
