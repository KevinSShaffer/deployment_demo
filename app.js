var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.send('This is the homepage.');
});

app.listen(3000, function() {
	console.log('Deployment demo application is running on port 3000.');
});