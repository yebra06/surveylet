const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    title: String,
    questions: [{ question: String }]
});

module.exports = mongoose.model('Survey', surveySchema);
