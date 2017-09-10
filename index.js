const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
 app.engine('mustache', mustacheExpress());
 app.set('view engine', 'mustache');
 app.set('views', './views');

 app.get('/', function (req, res) {
   res.render('product_list_page');
 });

 app.listen(3000, function () {
               console.log("Successfully started express application!");
           });
