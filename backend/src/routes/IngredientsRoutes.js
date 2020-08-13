var express = require('express');
var router = express.Router();
const User = require('../models/User');

const createUser = async (req, res) => {
  const { registration, name, turma, senha, role } = req.body;
  const user = await User.create({ registration, name, turma, senha });
  return res.json({"message": "Usuário criado!", user}).status(201);
};

const deleteUser = async (req, res) => {
  const { _id } = req.body;
  const user = await User.deleteOne({ _id });
  return res.json({ message: 'User deleted!', user }).status(410);
};

const updateUser = async (req, res) => {
  const { body } = req;
  const user = await User.updateOne({ body });
  return res.json({user }).send(200);
};

router.post('/', createUser);
router.delete('/', deleteUser);
router.patch('/', updateUser);

module.exports = router;