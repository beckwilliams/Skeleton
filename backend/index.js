var express = require('express');
var app = express();

app.get('/date', function (req, res) {
	res.send(new Date());
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server listening at http://%s:%s', host, port);
});