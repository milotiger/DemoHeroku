var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.json({message: "hello world"})
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log("listening on " + port);