const mongoose = require('mongoose');
const { render } = require('../../app');
const Recipe = mongoose.model('recipe');


// GET all Recipes
const recipeReadAll = function (req, res) {
  Recipe.find()
    .then((recipes) => {
      res.render('recipeHomePage', {title: 'Recipe Home Page' , pageHeader: {
        title: 'The Roast House', 
        strapline: 'Where culinary inspiration comes to you!'} , recipes: recipes })
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error retrieving recipes', error: err });
    });
};

// GET one Recipe by ID
const recipeReadOne = function (req, res) {
  const recipeId = req.params.recipeId; 
  Recipe.findById(recipeId)
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.status(200).json(recipe); 
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error retrieving recipe', error: err });
    });
};

const recipeCreate = function (req, res) {
  return res.status(200)
}

module.exports = {
  recipeReadOne, 
  recipeReadAll, 
  recipeCreate
};
