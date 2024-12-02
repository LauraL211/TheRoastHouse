const mongoose = require('mongoose');
const Location = mongoose.model('Location');

/* GET Login page */
const loginPage = function(req, res){res
    .status(200)
    .json({"status" : "success"});
    
    };
    /* GET Sign-Up page */
    const signup = function(req, res){res
        .status(200)
        .json({"status" : "success"});
        
    };
    
    module.exports = {
    loginPage,
    signup   };
