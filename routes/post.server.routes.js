module.exports = function(app){

 var posts = require('./../controllers/posts.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

//API routes
 app.route('/api/posts')
	.get(posts.list)
	.post(users.requiresLogin, posts.create);

  app.route('/api/posts/:postId')
	.get(posts.read)
  .delete(users.requiresLogin, posts.delete);

	app.route('/api/posts/edit/:postId')
	.get(posts.read)
	.put(users.requiresLogin, posts.update);

//Routes to render views
  app.route('/posts/new').get(posts.new);
  app.route('/posts/all').get(posts.all);
  app.route('/posts/edit/:postId').get(posts.edit);
  app.route('/posts/:postId').get(posts.view);

app.param('postId', posts.postByID);
}