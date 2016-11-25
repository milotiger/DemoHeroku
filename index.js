var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.json({message: "hello world"})
});

var port = 3000 || process.env.PORT;

app.listen(port, function () {
   console.log("listen on " + port);
});