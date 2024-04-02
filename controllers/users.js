const User = require('../models/user.js');

module.exports.renderSignupForm = (req , res) => {
    res.render('users/signup.ejs');
};

module.exports.signup = async (req , res) => {
    try{
        let { username , email , password } = req.body;
        const newUser = new User({ email , username });
        const registeredUser = await User.register(newUser , password);
        console.log(registeredUser);
        req.login(registeredUser , (err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "Register Successfully");
            res.redirect('/listings');
        })
        req.flash("success", "Register Successfully");
        res.redirect('/listings');
    }catch(e){
        console.log(`Error Ocurred ${e}`)
        req.flash("error" , e.message);
        res.redirect("/signup")
    }
};

module.exports.renderLoginForm = (req , res) => {
    res.render("users/login.ejs")
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome to Wonderlust! You are logged in!");
    const redirectUrl = res.locals.redirectUrl || '/listings';
    delete res.locals.redirectUrl; // Clear the redirect URL
    res.redirect(redirectUrl);
};

module.exports.logout = (req , res) => {
    req.logOut((err) => {
        if(err){
           return next(err);
        }
        req.flash("success" , "You are logged out!");
        res.redirect('/listings');
    })
};