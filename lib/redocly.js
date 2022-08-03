const path = require('path');


function redocly(url, app, stream, opt) {

    app.get('/__redocly/redoc.standalone.min.js', (req, res) => {
        res.sendFile('redoc.standalone.min.js', { root: path.join(__dirname, '.') });
    });

    app.get('/__redocly/try.js', (req, res) => {
        res.sendFile('try.js', { root: path.join(__dirname, '.') });
    });

    app.get('/__swagger/swagger.json', (req, res) => {
        streamToJson(stream).then( data => {
            res.send(data);
        });
    });
    
    app.get(url, (req, res) => {
        const html = `<body>
        <div id="redoc-container"></div>
        <script src="/__redocly/redoc.standalone.min.js"> </script>
        <script src="/__redocly/try.js"></script>
        <script>
            initTry({
                openApi:'/__swagger/swagger.json',
                tryText: 'Try'
            })
        </script>
        </body>`;
        res.end(html);
    });
}

async function streamToJson(stream) {
    try {
        return new Promise((resolve, reject) => {
            let chunks = '';
            stream.on('data', chunk => {
                chunks += chunk;
            });
            stream.on('end', chunk => {
                resolve(chunks.toString())
            })
        })
    } catch(e) {
        reject(error);
    }
}


module.exports = { redocly };