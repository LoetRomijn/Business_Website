var express = require('express');
var app = express();

app.use(express.static('Public'));

app.get('/', function (request, response) {
    response.send(request);
});

var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!' + server.address().port);
});


