const express = require('express');
const router = express.Router();
const Survey = require('../models/Survey.js');

// Get all surveys.
router.get('/', (req, res) => {
    Survey.find((err, surveys) => {
        res.json(surveys);
    });
});

// Get individual survey by id.
router.get('/:id', (req, res) => {
    Survey.findById(req.params.id, (err, survey) => {
        if (err)
            return next(err);
        res.json(survey);
    });
});

// SurveyCreate survey.
router.post('/create', (req, res) => {
    Survey.create(req.body, err => {
        if (err)
            console.log(err);
        res.end();
    });
});

module.exports = router;
