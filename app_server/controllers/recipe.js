/*  recipe home page */
const recipeHome = function(req, res){
    res.render('recipeHomePage', 
      { title: 'Recipe Home Page' , pageHeader: {
      title: 'The Roast House', 
      strapline: 'Where culinary inspiration comes to you!'} ,
      recipes: [
      { 
        Name: 'Chicken Curry',
        Time: '80 mins',
        Serves: '4 people',
        Difficulty: 'Easy'
      },
      {
        Name: 'Pasta Carbonara',
        Time: '80 mins',
        Serves: '4 people',
        Difficulty: 'Easy'
      },
      {
        Name: 'Spaghetti Bologna',
        Time: '80 mins',
        Serves: '4 people',
        Difficulty: 'Medium'
      },
      {
        Name: 'Lamb Kofta',
        Time: '120 mins',
        Serves: '4 people',
        Difficulty: 'Hard'
      },
      {
        Name: 'Lemon Chicken',
        Time: '60 mins',
        Serves: '2 people',
        Difficulty: 'Medium'
      },
      {
        Name: 'Beef Burgers',
        Time: '60 mins',
        Serves: '4 people',
        Difficulty: 'Easy'
      }
    ]
    });
  };
  
  module.exports = {
    recipeHome
  };
  