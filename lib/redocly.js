const path = require('path');
const fs = require('fs');

function redocly(url, app, pathFile, opt) {

    app.get('/__redocly/redoc.standalone.min.js', (req, res) => {
        res.sendFile('redoc.standalone.min.js', { root: path.join(__dirname, './static') });
    });

    app.get('/__redocly/try.js', (req, res) => {
        res.sendFile('try.js', { root: path.join(__dirname, './static') });
    });

    app.get('/__swagger/swagger.json', (req, res) => {
        const stream = fs.createReadStream(pathFile);
        stream.pipe(res);
    });
    
    app.get(url, (req, res) => {
        const html = `<body>
        <div id="redoc-container"></div>
        <script src="/__redocly/redoc.standalone.min.js"> </script>
        <script src="/__redocly/try.js"></script>
        <script>
            initTry({
                openApi:'/__swagger/swagger.json',
                ...JSON.parse('${JSON.stringify(opt)}'),
            })
        </script>
        </body>`;
        res.end(html);
    });
}



module.exports = { redocly };