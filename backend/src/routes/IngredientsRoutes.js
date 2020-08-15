var express = require('express');
var router = express.Router();
const Ingredient = require('../models/Ingredients');

const createIngredient = async (req, res) => {
  const { name, category, slug } = req.body;
  const ingredient = await Ingredient.create({ name, category, slug });
  return res.json({ message: 'Usuário criado!', ingredient }).status(201);
};

const deleteIngredient = async (req, res) => {
  const { _id } = req.body;
  const ingredient = await Ingredient.deleteOne({ _id });
  return res.json({ message: 'Ingredient deleted!', ingredient }).status(410);
};

const updateIngredient = async (req, res) => {
  const { body } = req;
  const ingredient = await Ingredient.findOneAndUpdate({ body });
  return res.json({ ingredient }).send(200);
};

router.post('/', createIngredient);
router.delete('/', deleteIngredient);
router.patch('/', updateIngredient);

module.exports = router;
