var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
//change for my own convienience//
app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});

