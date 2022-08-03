const express = require('express');
const { redocly } = require('../lib/redocly');
const path = require('path');
const fs = require('fs');
const app = express();

const options = { 
    // redocVersion: `2.0.0-rc.48`, // Used to handle compatibility issues, if not specified, read from the URL
    onlySwagger: true,
    tryText: 'try', // Try button text
    // trySwaggerInApi: true, // Whether to display swagger debugging window under api?
    // redocOptions: {enableConsole: true}, // Or the format is an array: `[specOrSpecUrl?, options?, element?, callback?]`
    // swaggerOptions: {dom_id: `#swagger-ui`},
    // pure: false, // Concise mode, hide some existing elements of redoc
};

function readFile (pathFile) {
    try {
        filePath = path.join(__dirname, pathFile);
        const contents = fs.readFileSync(filePath);
        return JSON.parse(contents);
    }
    catch (err) { 
        console.error(err);
    }
}

function bufferToStream (buffer) {
    const Readable = require('stream').Readable; 
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    return stream;
}


const json = readFile('./swagger.json');

const stream = bufferToStream(new Buffer.from(JSON.stringify(json)));

redocly('/doc', app, stream, options);

app.listen(3000, () => console.log('Server start...'))