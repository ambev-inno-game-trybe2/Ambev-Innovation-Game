const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  email: { type: String, require: true, min: 1, max: 60 },
  password: { type: String, require: true, min: 8, max: 64 },
  token: { type: String },
  bio: {
    name: {
      firstName: { type: String, require: true, min: 1, mas: 20 },
      lastName: { type: String, require: true, min: 1, mas: 20 },
    },
    age: { type: Number, require: true },
    birthday: { type: Date, require: true },
  },
  address: {
    street: { type: String, require: true, min: 4, max: 60 },
    city: { type: String, require: true, min: 4, max: 60 },
    state: { type: String, require: true, min: 4, max: 60 },
    country: { type: String, require: true, min: 4, max: 60 },
  },
  likedRecipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
  likedIngredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
  role: { type: String, default: 'user', require: true },
});

module.exports = mongoose.model('User', UserSchema);
