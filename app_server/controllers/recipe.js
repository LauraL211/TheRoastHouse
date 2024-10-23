/*  recipe home page */
const recipeHome = function(req, res){
    res.render('index', { title: 'Recipe Home Page' });
  };
  
  module.exports = {
    recipeHome
  };
  