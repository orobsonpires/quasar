/**
 * @author Rob Pi <orobsonpires@gmail.com>
 */

var Post = require('../../models/post');

var router = require('express').Router();

router.get('/', function(req, res, next) {

	Post.find()
	.sort('-date')
	.exec(function(err, posts) {
		if(err) {
			return next(err);
		}
		res.json(201, posts);
	});
});

router.post('/', function(req, res) {
	var post = new Post({
		body: req.body.body
	});

	post.username = req.auth.username;

	post.save(function(err, post) {
		if(err) {
			return next(err);
		}
		res.send(201, post);
	});	
});

module.exports = router;