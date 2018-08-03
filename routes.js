"use strict";

const listingsController = require('./controllers/listings-controller.js');
const photoController = require('./controllers/photo-controller.js');
const yelpController = require('./controllers/yelp-controller.js');
const messagesController = require('./controllers/messages-controller.js');
const usersController = require('./controllers/users-controller.js');
const ratingsController = require('./controllers/ratings-controller.js');

const jwt = require("jsonwebtoken");


function authMiddleware(req,res,next) {
    let token = req.body.token;
    if (!token) {
      console.log("No token");
        res.status(401).end();
        return;
    }
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
      if(err) {
        console.log("Invalid token")
        res.status(401).end();
        return;
      }
      req.decodedToken = decoded;
      next();
    });
}

module.exports = function(app) {
    /**
     * Listings
     */
    //public routes
    app.post('/api/listings/search', listingsController.searchListings);
    app.post('/api/listings/:id/yelp', yelpController.categorySearchByLocation);
    app.get('/api/listings/:id', listingsController.getListing);
    app.get('/api/listings', listingsController.getListings);
    //protected routes
    app.post('/api/listings', authMiddleware, listingsController.postListings);
    app.delete('/api/listings/:id', authMiddleware, listingsController.deleteListing);
    app.patch('/api/listings/:id', authMiddleware, listingsController.editListing);

    /**
     * Photo
     */
    //public routes
    app.post('/api/upload', photoController.uploadFile);

    /**
     * Messages
     */
    app.get ('/api/messages', messagesController.getAllMessages);
    app.get('/api/filtered-messages', messagesController.getFilteredMessages);
    app.post('/api/newMessage', messagesController.addNewMessage);

    /**
     * Users
     */
    //public routes
    app.post('/api/signup', usersController.signup);
    app.post('/api/profile', usersController.profile)
    app.post('/api/login', usersController.login)
    app.get('/api/ratings', ratingsController.getAllRatingsThatUserRated)
    app.get('/api/ratee', ratingsController.getAllRatingsOfRatee)
    app.post('/api/ratings', ratingsController.addNewRating)
    app.get('/api/threads', usersController.threads)
    // app.get('/api/get-user-from-landlord-id', usersController.getUserFromLandlordId)
};