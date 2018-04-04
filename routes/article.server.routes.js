module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/articles')
	.get(articles.list)
	.post(users.requiresLogin, articles.create);

  app.route('/api/articles/:articleId')
	.get(articles.read)
  .delete(users.requiresLogin, articles.delete);

	app.route('/api/articles/edit/:articleId')
	.get(articles.read)
	.put(users.requiresLogin, articles.update);
	
app.route('/hikingtools')
	.get(articles.viewHikingtools);

 app.route('/hikingguieds')
	.get(articles.viewHikingguieds);

app.route('/login')
	.get(articles.viewLogin);	
app.route('/list')
	.get(articles.viewList);


 app.route('/api/articles')
	.get(articles.list)
	.post(users.requiresLogin, articles.create);

app.route('/signup').get(users.signupView);
		app.route('/profile/:userId')
	.get(users.viewProfile);	

app.route('/profile').get(users.viewProfile);
		app.route('/users/list')
	.get(articles.viewList);	

app.param('articleId', articles.articleByID);

}
