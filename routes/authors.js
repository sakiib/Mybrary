const express = require('express');
const router = express.Router();

// all authors route
router.get('/', (req, res) => {
    res.send('<h1> This is the author page </h1>');
});

// new author route
router.get('/', (req, res) => {
    res.render('authors/new');
});

// create author route
router.post('/', (req, res) => {
    res.send('Create');
});

module.exports = router;