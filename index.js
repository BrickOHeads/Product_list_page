const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
var fetch = require('node-fetch');
var http = require('follow-redirects').http;

// fetch request from http.. redirect allowed
http.get("http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1", (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData); // showing the data raw-pretty
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

    fetch.Promise = require('bluebird');
 app.engine('mustache', mustacheExpress());
 app.set('view engine', 'mustache');
 app.set('views', './views');

 app.get('/', function (req, res) {
   res.render('product_list_page');
 });

 app.listen(3000, function () {
               console.log("Successfully started express application!");
           });
