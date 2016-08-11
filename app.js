var express         = require('express'),
    exphbs          = require('express-handlebars'),
    path            = require('path'),
    app             = express(),
    port            = Number(process.env.PORT || 3100);

app.use(express.static('public'));

app.disable('x-powered-by');




app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/projects', function (req, res) {
    res.render('projects');
});

app.get('/technology', function (req, res) {
    res.render('technology');
});

app.get('/thanks', function (req, res) {
    res.render('thanks');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});


console.log('Listening on port ' + port);
app.listen(port);
