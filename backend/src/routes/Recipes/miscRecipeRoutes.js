const express = require('express');

const router = express.Router();
const Recipe = require('../../models/Recipes');
const User = require('../../models/User');

const likeRecipe = async (req, res) => {
  const { _id, userId } = req.body;
  if (!_id || !userId) res.json({ error: 'Failed' }).status(400);
  const recipe = await Recipe.findOneAndUpdate({ _id }, { $inc: { likeCount: 1 } });
  const user = await User.findByIdAndUpdate(
    { _id: userId },
    { $addToSet: { likedRecipes: _id } },
  );
  return res.json({ message: 'liked', recipe, userUpdated: user.likedRecipes }).status(200);
};

const topRecipes = async (_req, res) => {
  try {
    const recipes = await Recipe.find().sort('-likeCount');
    return res.json(recipes).status(200);
  } catch (error) {
    res.json(error).status(400);
  }
};

router.post('/like', likeRecipe);
router.get('/top', topRecipes);

module.exports = router;
