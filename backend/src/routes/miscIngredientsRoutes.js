var express = require('express');
var router = express.Router();
const Ingredient = require('../models/Ingredients');
const User = require('../models/User');

const likeIngredient = async (req, res) => {
  const { _id } = req.body;
  const ingredient = await Ingredient.findOneAndUpdate({ _id }, { $inc: { likeCount: 1 } });
  return res.json({ message: 'liked', ingredient }).status(200);
};

const favIngredient = async (req, res) => {
  const { _id } = req.body;
  if (!user_id) {
    const ingredient = await Ingredient.findOneAndUpdate(
      { _id },
      { $inc: { likeCount: 1 } },
      { new: true }
    );
    return res.json({ message: 'liked', ingredient }).status(200);
  }
  const ingredient = await User.updateOne(
    { _id: user_id },
    {
      $addToSet: {
        likedIngredients: _id,
      },
    }
  );
  return res.json(ingredient);
};

const topIngredients = async (req, res) => {
  const ingredient = await Ingredient.deleteOne({ _id });
  return res.json({ message: 'Ingredient deleted!', ingredient }).status(410);
};

const updateIngredient = async (req, res) => {
  const { body } = req;
  const ingredient = await Ingredient.findOneAndUpdate({ _id });
  return res.json({ ingredient }).send(200);
};

router.post('/', createIngredient);
router.delete('/', deleteIngredient);
router.patch('/', updateIngredient);

module.exports = router;
