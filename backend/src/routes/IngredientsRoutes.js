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
  console.log(req.body);
  try {
    const ingredient = await Ingredient.findByIdAndUpdate(_id, update, { new: true });
    return res.json({ ingredient }).send(200);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

const getIngredient = async (req, res) => {
  const { _id } = req.body;
  try {
    const ingredient = await Ingredient.findOne({ _id });
    return res.json({ ingredient });
  } catch (error) {
    console.log(error);
    return res.json({ message: error });
  }
};

router.get('/all', getAllIngredients);
router.post('/', createIngredient);
router.delete('/', deleteIngredient);
router.patch('/', updateIngredient);
router.get('/', getIngredient);

module.exports = router;
