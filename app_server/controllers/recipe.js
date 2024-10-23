/*  recipe home page */
const recipeHome = function(req, res){
    res.render('recipeHomePage', { title: 'Recipe Home Page' });
  };
  
  module.exports = {
    recipeHome
  };
  