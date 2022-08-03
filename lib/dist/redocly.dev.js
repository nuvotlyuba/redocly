"use strict";

var path = require('path');

var fs = require('fs');

function redocly(url, app, pathFile, opt) {
  app.get('/__redocly/redoc.standalone.min.js', function (req, res) {
    res.sendFile('redoc.standalone.min.js', {
      root: path.join(__dirname, '.')
    });
  });
  app.get('/__redocly/try.js', function (req, res) {
    res.sendFile('try.js', {
      root: path.join(__dirname, '.')
    });
  });
  app.get('/__swagger/swagger.json', function (req, res) {
    var stream = fs.createReadStream(pathFile);
    stream.pipe(res);
  });
  app.get(url, function (req, res) {
    var html = "<body>\n        <div id=\"redoc-container\"></div>\n        <script src=\"/__redocly/redoc.standalone.min.js\"> </script>\n        <script src=\"/__redocly/try.js\"></script>\n        <script>\n            initTry({\n                openApi:'/__swagger/swagger.json',\n                \n            })\n        </script>\n        </body>";
    res.end(html);
  });
}

module.exports = {
  redocly: redocly
};