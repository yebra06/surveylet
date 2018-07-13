const express = require('express');
const path = require('path');

// Create app instance. 
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static bundled react app.
app.use(express.static('dist'));

app.get('/api/test', (req, res) => res.send({data: 'test'}));

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
