module.exports.isLoggedIn = (req , res , next) => {
    if(!req.isAuthenticated()){
        req.flash("error" , "yo must be logged in to create listing!");
       return res.redirect('/login');
    }
}