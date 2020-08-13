require('dotenv').config();

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const mongoose = require('mongoose');

const path = require('path');
const { PORT } = process.env.HTTP_PORT;
const port = PORT || 3000;
const app = express();
const UserRoutes = require('./routes/UserRoutes');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'assets')));
app.use('/users', UserRoutes)

app.listen(port);
