const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
   res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", 
    populate: {
        path: "author",
    },
})
.populate("owner");
    if(!listing){
        req.flash("error" , "Listing You created Doesn't Exsits");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res) => {
    url = req.file.path;
    filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash("success" , "New Listing Created!");
    res.redirect("/listings");
};

// module.exports.createListing = async (req, res) => {
//     try {
//         let url = req.file.path;
//         let filename = req.file.filename;
        
//         console.log("Received file path:", url);
//         console.log("Received file filename:", filename);
        
//         const newListing = new Listing(req.body.listing);
        
//         console.log("New Listing data:", newListing);
        
//         newListing.owner = req.user._id;
//         newListing.image = { url, filename };
        
//         console.log("New Listing with owner and image:", newListing);
        
//         await newListing.save();
        
//         console.log("New Listing saved to database:", newListing);
        
//         req.flash("success", "New Listing Created!");
//         res.redirect("/listings");
//     } catch (error) {
//         console.error("Error creating listing:", error);
//         req.flash("error", "Failed to create a new listing.");
//         res.redirect("/listings/new");
//     }
// };


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error" , "The listing you are requesting for is not Availible");
        res.redirect("/listings");
    }else{
        res.render("listings/edit.ejs", { listing });
    }
};

module.exports.updateListing = async (req, res) => {
    // if (!req.body.listing) {
    //   throw new ExpressError(400, "Send Valid data for listing");
    // }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success" , "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success" , "Listing Deleted!");
    res.redirect("/listings");
};