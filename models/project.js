let db = require('../db');

let Project = db.model('Project',{
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: false},
    clientCompany: {type: String, required: false},
    createdBy: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now}
});

module.exports = Project;