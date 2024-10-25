/* GET Login page */
const loginPage = function(req, res){
    res.render('loginHomePage', { title: 'Login Page' , pageHeader: {
        title: 'The Roast House', strapline: 'Where culinary inspiration comes to you!'
    }});
    };
    /* GET Sign-Up page */
    const signup = function(req, res){
    res.render('signupHomePage', { title: 'Sign-Up' , pageHeader: {
        title: 'The Roast House', strapline: 'Where culinary inspiration comes to you!'
    }});
    };
    
    module.exports = {
    loginPage,
    signup   };
    
    