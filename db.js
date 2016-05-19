/**
 * @author Rob Pi <orobsonpires@gmail.com>
 */
var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/social', function(err) { 
    if (err) throw err;
	console.log('mongodb connected...');
});

module.exports = mongoose;