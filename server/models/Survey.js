const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: String
});

const surveySchema = new Schema({
    title: String,
    questions: [{ type: Schema.ObjectId, ref: 'Question' }]
});

module.exports = mongoose.model('Question', questionSchema);
module.exports = mongoose.model('Survey', surveySchema);
