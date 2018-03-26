var mongoose = require('mongoose');
var signup = require('./../models/signup.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.viewsignup = function(req, res){
  res.render('./../public/views/article/signup.ejs', {
          user: req.user || null,
          request: req
        });
}

module.exports.create = function(req, res) {
  var signup = new signup(req.body);
   signup.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
 
};

 exports.signupByID = function(req, res, next, id) {
	signup.findById(id).populate('user', 'email').exec(function(err, signup) {
		if (err) return next(err);
		if (!signup) return next(new Error('Failed to load signup ' + id));
		req.signup = signup;
		next();
	});
 };