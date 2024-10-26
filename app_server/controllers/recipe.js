$(function () {

  var $container = $('#container').masonry({
      itemSelector: '.item',
      columnWidth: 200
  });

  // reveal initial images
  $container.masonryImagesReveal($('#images').find('.item'));
});

$.fn.masonryImagesReveal = function ($items) {
  var msnry = this.data('masonry');
  var itemSelector = msnry.options.itemSelector;
  // hide by default
  $items.hide();
  // append to container
  this.append($items);
  $items.imagesLoaded().progress(function (imgLoad, image) {
      // get item
      // image is imagesLoaded class, not <img>, <img> is image.img
      var $item = $(image.img).parents(itemSelector);
      // un-hide item
      $item.show();
      // masonry does its thing
      msnry.appended($item);
  });

  return this;
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
  