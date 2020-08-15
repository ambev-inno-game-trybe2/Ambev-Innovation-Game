var express = require('express');
var router = express.Router();
const Recipe = require('../models/Recipes');

const CreateRecipe = async (req, res) => {
  const { title, recipeIngredients, tasteCategory } = req.body;
  console.log(req.body);
  if (!req.body) {
    return res.json({ message: 'operation not permited' });
  }
  const verifyRecipe = await Recipe.findOne({ title });
  if (!verifyRecipe) {
    const recipe = await Recipe.create({ title, recipeIngredients, tasteCategory });
    return res.json({ message: 'Recipe criado!', recipe }).status(201);
  }
  return res.json({ message: 'error' });
};

const deleteRecipe = async (req, res) => {
  const { _id } = req.body;
  try {
    const recipe = await Recipe.deleteOne({ _id });
    return res.json({ message: 'Recipe deleted!', recipe }).status(410);
  } catch (error) {
    return res.json({ message: error });
  }
};

const updateRecipe = async (req, res) => {
  const { _id, update } = req.body;
  try {
    const recipe = await Recipe.findByIdAndUpdate(_id, update, { new: true });
    return res.json({ recipe }).send(200);
  } catch (error) {
    res.json({ message: error });
  }
};

router.post('/', CreateRecipe);
router.delete('/', deleteRecipe);
router.patch('/', updateRecipe);

module.exports = router;
