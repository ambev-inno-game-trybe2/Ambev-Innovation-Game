require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const { PORT } = process.env.HTTP_PORT;
const port = PORT || 3000;
const app = express();
const BooksRoutes = require('./routes/BooksRoutes');
const UserRoutes = require('./routes/UserRoutes');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
/**
 * Database setup
 */
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'assets')));

app.use('/books/', BooksRoutes)
app.use('/users', UserRoutes)

app.listen(3000);
