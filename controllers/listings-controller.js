const queries = require("../db/queries.js");
const helpers = require("../helpers/helpers.js");

let controller = {
  getAllListings: function (req, res) {
    queries.getAllListings()
      .then(listings => {
        res.json(listings);
      })
  },

  getListing: function (req, res) {
    queries.getListing(req.params.id)
      .then(listing => {
        res.json(listing);
      })
  },

  // Add new routes below
  postListings: function(req, res) {
    console.log(req.body)
    const imageUrls = req.body.images
    console.log(req.body.data)
    console.log(imageUrls)
  }
};
module.exports = controller;