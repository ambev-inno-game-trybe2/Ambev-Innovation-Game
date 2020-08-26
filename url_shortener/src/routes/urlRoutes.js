require('dotenv').config();
const express = require('express');

const router = express.Router();
const ShortUrl = require('../models/Url');

const validateNewUrl = require('../middlewares/validators/url/urlValidateModel');
/**
 * Create a new User.
 * @namespace userRoutes
 * @description POST /users
 * @async
 * @function createUser
 * @param {Object} UserInfo - UserModel Object
 * @returns {Object} - New User object that contains all body info and token.
 * @throws {Object} Throw object error.
 */
const newUrl = async (req, res) => {
  const { origin, destination, userId, recipeId } = req.body;
  console.log(req.body);
  const newurl = await ShortUrl({ origin, destination, userId, recipeId });
  return res.json({ newurl });
};

const redirectTo = async (req, res) => {};

router.post('/', validateNewUrl, newUrl);
router.get('/', redirectTo);

module.exports = router;
