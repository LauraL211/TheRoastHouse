/* GET Login page */
const loginPage = function(req, res){
    res.render('loginHomePage', { title: 'Login Page' });
    };
    /* GET Sign-Up page */
    const signup = function(req, res){
    res.render('signupHomePage', { title: 'Sign-Up' });
    };
    
    module.exports = {
    loginPage,
    signup   };
    
    