var express = require('express');
var router = express.Router();
const User = require('../models/User')

router.post('/', async (req, res) => {
    const { registration, name, turma, senha, role } = req.body;
    const user = await User.create({registration, name, turma, senha});
    return res.json(user)
  });
  

module.exports = router;