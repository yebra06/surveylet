const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// Connect db.
mongoose.connect('mongodb://localhost:27017/surveylet', {useNewUrlParser: true})
    .then(() => console.log('connection to db successful'))
    .catch((err) => console.log(err));

// Create app instance.
const app = express();

// Import api routes.
const survey = require('./routes/survey');

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use('/api/survey', survey);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`\nServer started...\nListening on port ${PORT}`));
