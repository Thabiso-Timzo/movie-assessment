const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

const { Favourite } = require("../Models/Favourite");

router.post("/favouriteNumber", /*auth,*/ (req, res) => {
    // Find Favourite information inside Favourite Collection by Movie ID
    Favourite.find({"movieId": req.body.movieId})
        .exec(( err, favourite) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, favouriteNumber: favourite.length });
        })
});

router.post("/favourited", /*auth,*/ (req, res) => {
    // Find Favourite Information Inside Favourite Collection by Movie Id. userFrom
    Favourite.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom})
        .exec((err, favourite) => {
            if (err) return res.status(400).send(err)

            // How can We know if I already favourite this movie or not
            let result = false;
            if (favourite.length !== 0) {
                result = true;
            }
            res.status(200).json({ success: true, favourited: result });
        })
});

router.post("/addToFavourite", /*auth,*/ (req, res) => {
    // Save the information about the movie or user Id inside the favourite Collection
    const favourite = new Favourite(req.body)
    favourite.save((err, doc) => {
        if (err) return res.json({ success: false, err})
        return res.status(200).json({success: true})
    })
});

router.post("/removeFromFavorite", /*auth,*/ (req, res) => {
    Favourite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err})
            res.status(200).json({ success: true, doc})
        })
});

module.exports = router;