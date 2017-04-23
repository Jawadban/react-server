const express = require('express');
const app = express();

app.get('/', function(req, res){
	//res.send('Hello world')
	res.send(req.app.locals.username)
})

app.get('/login/:user', function (req, res) {
  // Some code to log in a user
  var username = req.params.user;
  app.locals.username = 'tom'
  console.log(username);
  res.send(req.app.locals.username)
});


const server = app.listen('3000', function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('example app listening at http://%s:%s', host, port)
})