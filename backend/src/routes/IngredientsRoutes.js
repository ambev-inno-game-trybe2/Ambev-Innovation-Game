var express = require('express');
var router = express.Router();
const Ingredient = require('../models/Ingredients');

const getAllIngredients = async (req, res) => {
  const ingredients = await Ingredient.find();
  return res.json({ ingredients }).status(200);
};

const createIngredient = async (req, res) => {
  const { name, category, slug } = req.body;
  if (!name) {
    return res.json({ message: 'operation not permited' });
  }
  const ingredient = await Ingredient.create({ name, category, slug });
  return res.json({ message: 'Ingrediente criado!', ingredient }).status(201);
};

const deleteIngredient = async (req, res) => {
  const { _id } = req.body;
  const ingredient = await Ingredient.deleteOne({ _id });
  return res.json({ message: 'Ingredient deleted!', ingredient }).status(410);
};

const updateIngredient = async (req, res) => {
  const { _id, update } = req.body;
  try {
    const ingredient = await Recipe.findByIdAndUpdate(_id, update, { new: true });
    return res.json({ ingredient }).send(200);
  } catch (error) {
    res.json({ message: error });
  }
};

router.get('/', getAllIngredients);
router.post('/', createIngredient);
router.delete('/', deleteIngredient);
router.patch('/', updateIngredient);

module.exports = router;
