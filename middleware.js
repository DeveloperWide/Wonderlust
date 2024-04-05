const Listing = require('./models/listing');
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

// Middleware to check if the user is logged in
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a listing!");
        return res.redirect('/login');
    }
    next();
};

// Middleware to save redirect URL
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl; // Remove redirect URL after use
    }
    next();
};

// Middleware to check if the user is the owner of the listing
module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    try {
        const listing = await Listing.findById(id);
        if (!listing.owner.equals(req.user._id)) {
            req.flash("error", "You are not the owner of this listing");
            return res.redirect(`/listings/${id}`);
        }
        next();
    } catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
};

// Middleware to validate listing data
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        next(new ExpressError(400, errMsg)); // Pass validation errors to error handling middleware
    } else {
        next();
    }
};

// Middleware to validate review data
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        next(new ExpressError(400, errMsg)); // Pass validation errors to error handling middleware
    } else {
        next();
    }
};

// Middleware to check if the user is the author of the review
module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    try {
        const review = await Review.findById(reviewId);
        if (!review.author.equals(req.user._id)) {
            req.flash("error", "You did not create this review");
            return res.redirect(`/listings/${id}`);
        }
        next();
    } catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
};
