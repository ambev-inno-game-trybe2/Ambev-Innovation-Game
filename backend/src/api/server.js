require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');
const morgan = require('morgan');
const UserRoutes = require('../routes/User/UserRoutes');
const RecipeRoutes = require('../routes/Recipes/RecipeRoutes');
const IngredientRoutes = require('../routes/Ingredients/IngredientsRoutes');
const miscIngredientRoutes = require('../routes/Ingredients/miscIngredientsRoutes');
const miscRecipeRoutes = require('../routes/Recipes/miscRecipeRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use('/users', UserRoutes);
app.use('/ingredients', IngredientRoutes);
app.use('/recipes', RecipeRoutes);
app.use('/ingredients/misc', miscIngredientRoutes);
app.use('/recipes/misc', miscRecipeRoutes);
app.use('*', (_req, res) => res.status(404).json({ message: 'Oops!', status: 404 }));

module.exports = app;
