var express         = require('express'),
    exphbs          = require('express-handlebars'),
    path            = require('path'),
    app             = express(),
    port            = Number(process.env.PORT || 3100);

// app.use(express.static('public'));

app.disable('x-powered-by');

app.use('/', express.static(__dirname + '/public'));


console.log('Listening on port ' + port);
app.listen(port);
