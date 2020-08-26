require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');
const morgan = require('morgan');
const urlRoutes = require('../routes/urlRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use('/', urlRoutes);

app.use('*', (_req, res) => res.status(404).json({ message: 'Oops!', status: 404 }));

module.exports = app;
