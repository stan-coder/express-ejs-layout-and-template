var express = require('express');
var app = express();
var engine = require('ejs-mate');


app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    property: 'Value 1',
    propertiesForPartial: ['One', 'Two'], 
    title: 'It\'s working'
  });
});


app.listen(3000, () => {
  console.log('Express listening on port 3000');
});