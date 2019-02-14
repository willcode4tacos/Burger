var express = require('express');
var path = require('path')
var app = express()
var PORT = process.env.PORT || 3000

var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

app.use(express.static('/public'));
app.use(express.static(path.join(__dirname, '/public')));


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'handlebars');
app.set('views', './views');

var burgersController = require('./controllers/burgersController');

app.use('/', burgersController);

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT)
})