const mongoose = require('mongoose');
const Location = mongoose.model('Location');

const recipeHome = function(req, res){
    res
.status(200)
.json({"status" : "success"});

  };
  
  module.exports = {
    recipeHome
  };
