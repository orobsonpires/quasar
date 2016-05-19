/**
 * @author Rob Pi <orobsonpires@gmail.com>
 */

var Project = require('../../models/project');
var router = require('express').Router();


router.get('/', function (req, res, next) {
    Project.find()
	.exec(function(err, result) {
		if(err) {
			return next(err);
		}
		res.json(201, result);
	});
});    

router.post('/', function (req, res, next) {
    var project = new Project({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            client: req.body.client,
            createdby: req.body.createdby
        });
    
    project.save(function (err, project) {
        if (err) { 
            return next(err); 
        }
        res.json(201, project);
    });
    
});    

module.exports = router;