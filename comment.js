//create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

//set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// parse multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

//render form
app.get('/comment', function(req, res){
   res.render('form');
});

//process form
app.post('/comment', function(req, res){
   console.log(req.body);
   res.send("received your request!");
});

//listen port 8080
app.listen(8080);