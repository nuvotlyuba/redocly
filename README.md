# [redoc-express-try]

## Install

```shell
npm install redoc-express-try
```

## Usage

```javascript
const redocly = require('redoc-express-try');
const express = require('express');

const app = express();
const port = 3000;

// serve your swagger.json file
app.get('/docs/swagger.json', (req, res) => {
  res.sendFile('swagger.json', { root: '.' });
});

```html
<body>
  <div id="redoc-container"></div>
  <script src="https://cdn.jsdelivr.net/npm/redoc@2.0.0-rc.55/bundles/redoc.standalone.min.js"> </script>
  <script src="https://cdn.jsdelivr.net/gh/wll8/redoc-try@1.4.1/dist/try.js"></script>
  <script>
    initTry({
      openApi: 'https://__swagger/swagger.json',
      redocOptions: {scrollYOffset: 50},
    })
  </script>
</body>
```

## Options
When the parameter type is a string, the value is openApi.

When the parameter type is an object, you can configure the following:

``` js
initTry({
  openApi: `https://__/swagger/swagger.json`, // openApi address
  // redocVersion: `2.0.0-rc.48`, // Used to handle compatibility issues, if not specified, read from the URL
  // onlySwagger: true,
  // tryText: `try`, // Try button text
  // trySwaggerInApi: true, // Whether to display swagger debugging window under api?
  // redocOptions: {enableConsole: true}, // Or the format is an array: `[specOrSpecUrl?, options?, element?, callback?]`
  // swaggerOptions: {dom_id: `#swagger-ui`},
  // pure: false, // Concise mode, hide some existing elements of redoc
})
```