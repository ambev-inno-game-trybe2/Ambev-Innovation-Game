require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const generateToken = require('../utils/token');
const hash = require('../utils/hash');
const verifyJWT = require('../middlewares/verifyJWT');
const validateUserModel = require('../middlewares/validateUserModel');
const verifyIfUserExists = require('../middlewares/verifyIfExists');

const createUser = async (req, res) => {
  const { email, bio, address, password } = req.body;
  const token = generateToken(email);
  const encpassword = hash.hashNow(password);
  const user = await User.create({ email, bio, address, password: encpassword, token: token });
  return res.json({ message: 'Usuário criado!', user }).status(201);
};

const loginRoute = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user.email === email && hash.decryptHash(user.password) === password) {
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

router.post('/', verifyIfUserExists, validateUserModel, createUser);
router.delete('/', verifyJWT, deleteUser);
router.patch('/', updateUser);
router.get('/login', loginRoute);

module.exports = router;
