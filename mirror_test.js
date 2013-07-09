var google = require('googleapis');
google.discover('mirror','v1').execute(function(err,client){
	console.log( client );
});