const { response } = require('express');
const request = require('request');
const apiOptions = 
  {
    server : 'http://localhost:3000'
  };

if(process.env.NODE_ENV === 'production')
  {
    apiOptions.server = 'https://theroasthouse.onrender.com';
  }

const _renderHomepage = function(req, res)
  {
    res.render('recipeHomePage', 
      { title: 'Recipe Home Page' , pageHeader: {
      title: 'The Roast House', 
      strapline: 'Where culinary inspiration comes to you!'} ,
      recipes: responseBody
    });
  };

  const homelist = function(req, res)
  { 
    const path = '/api/recipes';
    const requestOptions = 
    {
      url : apiOptions.server + path,
      method : 'GET',
      json : {},
      gs :  {
              lng : -0.9690884,
              lat : 51.455041,
              maxDistance : 20
            }
    };
    request(requestOptions, (err, response, body) =>
            {
              _renderHomepage(req, res);
            }
           );
  };

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
  