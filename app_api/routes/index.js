const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe');
const registrationController = require('../controllers/registration');

//Recipes
router
    .route('/HomePage')
    .get(recipeController.recipeReadAll)
    .post(recipeController.recipeCreate);

//Registration
router
    .route('/SignUpPage')
    .get(registrationController.signup)
    .post(registrationController.registrationCreate);

//Login
router
    .route('/')
    .get(registrationController.loginPage)

module.exports = router;
