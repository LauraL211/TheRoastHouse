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

mongoose.model('recipe', recipeSchema);
mongoose.model('registration', registrationSchema);