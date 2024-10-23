const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');


/* Locations pages */
router.get('/loginPage', ctrlLocations.loginPage);
router.get('/signup', ctrlLocations.signup);
router.get('/recipePage', ctrlLocations.recipePage);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;


