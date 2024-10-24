const express = require('express');
const router = express.Router();

const ctrlRegistration = require('../controllers/registration'); 
const ctrlRecipe = require('../controllers/recipe');


/* Registration pages */
router.get('/', ctrlRegistration.loginPage);
router.get('/SignUpPage', ctrlRegistration.signup);

/* Recipe Home pages */
router.get('/HomePage', ctrlRecipe.recipeHome);
module.exports = router;


