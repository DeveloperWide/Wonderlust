const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    // Redirect the user back to the review page
    
    req.flash("success" , "Review Submitted!");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
    const { id, reviewId } = req.params;

    // Update the listing by pulling the reviewId from the reviews array
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    // Delete the review from the database
    await Review.findByIdAndDelete(reviewId);
    
    req.flash("success" , "Review Deleted!");

    // Redirect back to the listing page
    res.redirect(`/listings/${id}`);
};