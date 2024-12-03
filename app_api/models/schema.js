const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Time: String,
    Serves: String,
    Difficulty: String
});

const registrationSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

const reviewSchema = new mongoose.Schema({
  author: { type: String, required: true},
  rating: { type: Number, required: true, min: 0, max: 5},
  reviewText: { type: String, required: true} ,
  createdOn: { type: String, 'default' : Date.now}
});

mongoose.model('recipe', recipeSchema);
mongoose.model('registration', registrationSchema);
mongoose.model('review', reviewSchema);