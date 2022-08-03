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