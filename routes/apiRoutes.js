const router = require('express').Router();
const data = require('../db/db.json');

router.get('/notes', (req,res) => {
    res.json(data)
});

module.exports = router;