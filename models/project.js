/**
 * @author Rob Pi <orobsonpires@gmail.com>
 */

var db = require('../db');

var project = db.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: false},
    client: {type: String, required: false},
    createdby: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now}
});

module.exports = db.model('Project', project, 'project');