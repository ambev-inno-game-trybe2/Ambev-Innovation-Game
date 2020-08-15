var express = require('express');
var router = express.Router();
const Recipe = require('../models/Recipes');

const CreateRecipe = async (req, res) => {
  const { name, category, slug } = req.body;
  const recipe = await Recipe.create({ name, category, slug });
  return res.json({ message: 'Usuário criado!', recipe }).status(201);
};

const deleteRecipe = async (req, res) => {
  const { _id } = req.body;
  const recipe = await Recipe.deleteOne({ _id });
  return res.json({ message: 'Recipe deleted!', recipe }).status(410);
};

const updateRecipe = async (req, res) => {
  const { body } = req;
  const recipe = await Recipe.findOneAndUpdate({ body });
  return res.json({ recipe }).send(200);
};

router.post('/', CreateRecipe);
router.delete('/', deleteRecipe);
router.patch('/', updateRecipe);

module.exports = router;
