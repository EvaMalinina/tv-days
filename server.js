const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/tv-days'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/tv-days/index.html'));
});

app.listen(process.env.PORT || 8081, function () {
  console.log('CORS-enabled web server listening on port 81')
});
