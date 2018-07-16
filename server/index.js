const path = require('path');
const express = require('express');

// Create app instance.
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/api/test', (req, res) => res.send({data: 'test'}));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => console.log(`\nServer started...\nListening on port ${PORT}`));
