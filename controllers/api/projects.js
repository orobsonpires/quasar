let Project = require('../../models/project');
let router = require('express').Router();


router.get('/', function (req, res, next) {
    Project.find(function (err, projects) {
        if (err) { return next(err); }
        res.json(projects);
    });
});    

router.post('/', function (req, res, next) {
    let project = new Project({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            clientCompany: req.body.clientCompany,
            createdBy: req.body.username
        });

    project.save(function (err, project) {
        if (err) { return next(err); }
        res.json(201, project);
    });
});    

module.exports = router;