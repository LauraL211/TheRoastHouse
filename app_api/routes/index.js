const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe');
const registrationController = require('../controllers/registration');  // Add this import

//Recipes
router
    .route('/recipes')
    .get(recipeController.recipeReadAll)
    .post(recipeController.recipeCreate);

//Registration
router
    .route('/register')
    .post(registrationController.registrationCreate);

router
    .route('/')
    .get(recipeController.recipeReadAll)
module.exports = router;
