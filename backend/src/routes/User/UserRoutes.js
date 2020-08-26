require('dotenv').config();
const express = require('express');

const router = express.Router();
const User = require('../../models/User');
const generateToken = require('../../utils/token');
const hash = require('../../utils/hash');
const verifyJWT = require('../../middlewares/verifyJWT');
const validateUserModel = require('../../middlewares/Validators/Users/validateUserModel');
const verifyIfUserExists = require('../../middlewares/verifyIfExists');

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
const createUser = async (req, res) => {
  const { email, bio, address, password } = req.body;
  const token = generateToken(email);
  const encpassword = hash.hashNow(password);
  const user = await User.create({ email, bio, address, password: encpassword, token });
  return res.json({ message: 'Usuário criado!', user }).status(201);
};

/**
 * Login route
 * @namespace userRoutes
 * @description GET /users/login
 * @async
 * @function login
 * @param {Object} UserInfo - Email and user password.
 * @returns {AuthObject} Token object.
 * @throws {ErrorObject} Throw object error.
 */
const loginRoute = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const unhashed = await hash.decryptHash(user.password);
  const pw = `"${password}"`;

  if (user.email === email && unhashed === pw) {
    return res.json({ auth: true, token: user.token, user }).status(200);
  }
  return res.json({ error: 'wrong user info' }).status(400);
};

/**
 * Delete user given its _id.
 * @namespace userRoutes
 * @async
 * @description DELETE /users
 * @function deleteUser
 * @param {Object} userId - Requires userId in order to find and delete it.
 * @param {String} Token - Requires an admin token.
 * @returns {Object} - Deleted user confirmation
 * @throws {Object} Throw object error.
 */
const deleteUser = async (req, res) => {
  const { _id } = req.body;
  const user = await User.deleteOne({ _id });
  return res.json({ message: 'User deleted!', user }).status(410);
};

/**
 * Update user info.
 * @namespace userRoutes
 * @async
 * @description PATCH /users
 * @function updateUser
 * @param {String} userId - Requires userId in order to find and delete it.
 * @param {Object} updateInfo - All fields to be updated.
 * @param {String} Token - Requires an admin token.
 * @returns {UpdatedUser} Return an updated user Object.
 * @throws {Object} Throw object error.
 */
const updateUser = async (req, res) => {
  const { _id, update } = req.body;
  try {
    const user = await User.findByIdAndUpdate(_id, update, { new: true });
    return res.json({ user }).send(200);
  } catch (error) {
    res.json({ message: error });
  }
};

router.post('/', verifyIfUserExists, validateUserModel, createUser);
router.delete('/', verifyJWT, deleteUser);
router.patch('/', verifyJWT, updateUser);
router.get('/login', loginRoute);

module.exports = router;
