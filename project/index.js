const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/render', (req, res) => {
    return res.end('test');
});

app.listen(3000, () => {
    console.info('Rendering server listening on port 3000...');
});
