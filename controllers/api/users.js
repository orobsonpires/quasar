var router = require('express').Router();
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var User = require('../../models/user');
var config = require('../../config');

router.get('/', function(req, res, next) {
	if(!req.headers['x-auth']) {
		return res.send(401);
	}

	var auth = jwt.decode(req.headers['x-auth'], config.secret);
	User.findOne({username: auth.username}, function(err, user) {
		if(err) {
			return next(err);
		}
		return res.json(user);
	});
});

router.post('/', function(req, res, next) {
	
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(req.body.password, salt, null, function(err, hash) {
		
			if(err) {
				return next(err);
			}

			var user = new User({
				username: req.body.username,
				password: hash
			});

			user.save(function(err, user) {
				if(err) {
					return next(err);
				}
				res.send(201);
			});

		});
	});
});

module.exports = router;