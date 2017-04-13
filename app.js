//required dependecies
var express = require('express');
var cors = require('cors');
var multer = require('multer');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var upload = multer({ dest: 'uploads/' });
//var searchTerm = require('./models/searchTerm');
var path = require('path');
var app = module.exports = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//var users = require('./routes/users');
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/', index);
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//get files
//app.get('/', function(req, res, next){
//  res.sendFile(__dirname + '/index.jade');
//});
//post files
app.post('/upload', upload.single('file'), function(req, res, next){
return res.json(req.file);
});
