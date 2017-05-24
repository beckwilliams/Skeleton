var express = require('express');
var app = express();

// set headers
app.use(function (request, response, next) {
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
	response.setHeader('X-Content-Type-Options', 'nostiff');
	response.setHeader('X-XSS-Protection', '1;mode=block');
	response.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

	next();
});

// GET endpoint to get current date
app.get('/date', function (req, res) {
	console.log('Sending current date.');
	res.send(new Date());
});

// set up server to listen to http://localhost:8081
var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server listening at http://%s:%s', host, port);
});
