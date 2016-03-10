
var fs = require('fs');
var https_options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert: fs.readFileSync(__dirname + "/server.crt")
}

var EC = require('./eve-connector-server.js')
var server = new EC.Server(8164, https_options);

// var express = require('express');
server.express.get('/ept-client', function (req, res) {
  res.sendFile(__dirname + '/web/ept-client.html');
});
