require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./server')
const { PORT } = process.env.HTTP_PORT;
const port = PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  }).then(() => console.log('Mongo is running.'));

app.listen(port,() => console.log(`Server is running on ${port}`));
