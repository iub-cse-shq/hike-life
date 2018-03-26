module.exports = function(app){

 var signup = require('./../controllers/signup.server.controller.js');
 
 
 app.route('/signup')
	.get(signup.viewsignup);
	
app.route('/api/signup')
	.get(signup.viewsignup)
	.post(signup.create);

 app.param('signupID', signup.signupByID);
}