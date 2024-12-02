const express = require('express');
const router = express.Router();

const ctrlRegistration = require('../controllers/registration'); 
const ctrlRecipe = require('../controllers/recipe');

// Registration routes (POST requests)
router.post('/login', ctrlRegistration.login);  // POST for Login
router.post('/signup', ctrlRegistration.signup); // POST for Sign-Up

// Recipe routes (GET requests)
router.get('/HomePage', ctrlRecipe.recipeHome); 
router.get('/HomePage/recipes', ctrlRecipe.recipeReadAll); 
router.get('/HomePage/:ObjectId', ctrlRecipe.recipeReadOne);

module.exports = router;
