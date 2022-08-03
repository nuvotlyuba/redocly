"use strict";

var express = require('express');

var _require = require('../lib/redocly'),
    redocly = _require.redocly;

var path = require('path');

var fs = require('fs');

var app = express();
var options = {
  // redocVersion: `2.0.0-rc.48`, // Used to handle compatibility issues, if not specified, read from the URL
  onlySwagger: true,
  tryText: 'try' // Try button text
  // trySwaggerInApi: true, // Whether to display swagger debugging window under api?
  // redocOptions: {enableConsole: true}, // Or the format is an array: `[specOrSpecUrl?, options?, element?, callback?]`
  // swaggerOptions: {dom_id: `#swagger-ui`},
  // pure: false, // Concise mode, hide some existing elements of redoc

};
redocly('/doc', app, __dirname + '/swagger.json', options);
app.listen(3000, function () {
  return console.log('Server start...');
});