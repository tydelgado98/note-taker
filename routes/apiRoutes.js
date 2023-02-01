const router = require('express').Router();
let data = require('../db/db.json');
const {writeFile} = require('fs');
const { json } = require('express');
const { restart } = require('nodemon');

router.get('/notes', (req,res) => {
    res.json(data)
});

router.post('/notes', ({body},res) => {
    
    data.push(body);
    writeFile('./db/db.json', JSON.stringify(data), (err)=>{

        if (err) {console.log(err);};
        res.json(data);
      });
        
});

module.exports = router;