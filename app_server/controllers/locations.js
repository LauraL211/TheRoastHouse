/* GET Login page */
const loginPage = function(req, res){
    res.render('index', { title: 'Login Page' });
    };
    /* GET Sign-Up page */
    const signup = function(req, res){
    res.render('index', { title: 'Sign-Up' });
    };
    /* GET 'Add review' page */
    const recipePage = function(req, res){
    res.render('index', { title: 'View recipe' });
    };
    
    module.exports = {
    loginPage,
    signup,
    recipePage    };
    
    