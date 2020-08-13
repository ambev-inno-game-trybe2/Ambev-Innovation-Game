require('dotenv').config();
const express = require('express');
const app = express();
const UserRoutes = require('../routes/UserRoutes');

const cors = require('cors');

const morgan = require('morgan');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');



const path = require('path');



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'assets')));
app.use('/users', UserRoutes);
app.use('*', (_req, res) => res.status(404).json({ message: 'Oops!', status: 404 }));

module.exports = app;