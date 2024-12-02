const mongoose = require('mongoose');

const dbURI = "mongodb+srv://lollylooney:Gads1858@cluster0.2sjgu.mongodb.net/TheRoastHouse?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose is connected");
    })
    .catch(err => {
        console.error("Connection error:", err);
    });

// Define the Recipe schema
const recipeSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Time: String,
    Serves: String,
    Difficulty: String
});

// Define the Registration Schema
const registrationSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  username: String,
  password: String
});

// Register and export the Recipe model
mongoose.model('recipe', recipeSchema);
mongoose.model('registration', registrationSchema);

module.exports = mongoose; 