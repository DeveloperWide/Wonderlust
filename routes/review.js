const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

//Reviews Post Route

router.post("/", validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save(`/listings/:id/review`);

    // Redirect the user back to the review page
    res.redirect(`/listings/${req.params.id}`);
}));

//Delete Review Route 
router.delete("/:reviewId",
    wrapAsync(async (req, res) => {
        const { id, reviewId } = req.params;

        // Update the listing by pulling the reviewId from the reviews array
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

        // Delete the review from the database
        await Review.findByIdAndDelete(reviewId);

        // Redirect back to the listing page
        res.redirect(`/listings/${id}`);
    })
);

module.exports = router