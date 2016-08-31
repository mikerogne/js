var figlet = require('figlet');

if(! process.argv[2])
	return console.log("You must specify a string.");

figlet(process.argv[2], function(err, data) {
	if(err) { return console.dir(err); }

	console.log(data);
});
