const express = require('express');

const router = express.Router();
const Ingredient = require('../../models/Ingredients');
const User = require('../../models/User');

const likeIngredient = async (req, res) => {
  const { _id, userId } = req.body;
  if (!_id || !userId) res.json({ error: 'Failed' }).status(400);
  const ingredient = await Ingredient.findOneAndUpdate({ _id }, { $inc: { likesCount: 1 } });
  const user = await User.findByIdAndUpdate(
    { _id: userId },
    { $addToSet: { likedIngredients: _id } },
  );
  return res.json({ message: 'liked', ingredient, userUpdated: user.likedIngredients }).status(200);
};

const topIngredients = async (_req, res) => {
  try {
    const ingredients = await Ingredient.find().sort('-likesCount');
    return res.json(ingredients).status(200);
  } catch (error) {
    res.json(error).status(400);
  }
};

router.post('/like', likeIngredient);
router.get('/top', topIngredients);

module.exports = router;
