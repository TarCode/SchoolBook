var express = require('express')
var app = express()
var exphbs  = require('express-handlebars')

var primarySchools = require('./data/primarySchools');
var highScools = require('./data/highSchools');
var privateOther = require('./data/privateOther');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('land');
});


app.get('/topic', function (req, res) {
    res.render('topic');
});

app.get('/primarySchools', function (req, res) {
    res.render('info',{info:primarySchools});
    
});

app.get('/highSchools', function (req, res) {
    res.render('info',{info:highSchools});
});

app.get('/privateOther', function (req, res) {
    res.render('info',{info:privateOther});
});

app.get('/search', function (req, res) {
    res.render('area');
});

app.get('/soon', function (req, res) {
    res.render('comingsoon');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

var port = process.env.PORT || 5000;
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
