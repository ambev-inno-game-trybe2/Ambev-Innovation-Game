require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./server');
const { PORT, MONGODB_URI } = process.env;
const port = PORT || 5000;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`Mongo is running on cluster ${MONGODB_URI}`));

app.listen(port, () => console.log(`Server is running on ${port}`));
