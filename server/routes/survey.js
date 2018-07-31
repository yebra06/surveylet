const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Survey = require('../models/Survey.js');

// Get all surveys.
router.get('/', (req, res, next) => {
    Survey.find((err, surveys) => {
        res.json(surveys);
    });
});

// SurveyCreate survey.
router.post('/create', (req, res, next) => {
    Survey.create(req.body, (err, survey) => {
        res.json(survey);
    });
});

module.exports = router;
