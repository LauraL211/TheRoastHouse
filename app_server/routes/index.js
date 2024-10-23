const express = require('express');
const router = express.Router();

const ctrlRegistration = require('../controllers/registration'); 
const ctrlRecipe = require('../controllers/recipe');


/* Registration pages */
router.get('/loginPage', ctrlRegistration.loginPage);
router.get('/signup', ctrlRegistration.signup);

/* Recipe Home pages */
router.get('/recipeHome', ctrlRecipe.recipeHome);
module.exports = router;


