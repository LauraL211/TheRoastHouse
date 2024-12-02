const mongoose = require('mongoose');
const Recipe = mongoose.model('recipe');

// Function for recipeHome
const recipeHome = (req, res) => {
  // Logic for recipeHome goes here
  res.send('Welcome to the Recipe Home');
};

// GET all Recipes
const recipeReadAll = function (req, res) {
  Recipe.find()
    .then((recipes) => {
      res.status(200).json(recipes); // Send the list of recipes back in the response
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error retrieving recipes', error: err });
    });
};

// GET one Recipe by ID
const recipeReadOne = function (req, res) {
  const recipeId = req.params.recipeId; // Get recipeId from request parameters
  Recipe.findById(recipeId)
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.status(200).json(recipe); // Send the recipe back in the response
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error retrieving recipe', error: err });
    });
};

// Export functions
module.exports = {
  recipeHome,
  recipeReadOne, // Export the function for reading a single recipe
  recipeReadAll, // Export the function for reading all recipes
};
