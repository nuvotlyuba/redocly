# [redocly-express-try]

## Install

```shell
npm install redocly
```

## Usage

```javascript
const redocly = require('redocly-express-try');
const express = require('express');

const app = express();
const port = 3000;

// serve your swagger.json file

redocly('/doc', app, __dirname + '/swagger.json', {tryText: 'Try'});

app.listen(3000, () => console.log('Server start...'));

Options

  redocVersion: `2.0.0-rc.48`, // Used to handle compatibility issues, if not specified, read from the URL
  onlySwagger: true,
  tryText: `try`, // Try button text
  trySwaggerInApi: true, // Whether to display swagger debugging window under api?
  redocOptions: {enableConsole: true}, // Or the format is an array: `[specOrSpecUrl?, options?, element?, callback?]`
  swaggerOptions: {dom_id: `#swagger-ui`},
  pure: false, // Concise mode, hide some existing elements of redoc

```