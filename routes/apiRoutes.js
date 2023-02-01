const router = require('express').Router();
let data = require('../db/db.json');
const {writeFile} = require('fs');
const { json } = require('express');
const { restart } = require('nodemon');

router.get('/notes', (req,res) => {
    res.json(data)
});

router.post('/notes', ({body},res) => {
    body.id = Math.floor(Math.random()*1000000).toString(16);
    data.push(body);
    writeFile('./db/db.json', JSON.stringify(data), (err)=>{

        if (err) {console.log(err);};
        res.json(data);
      });
        
});

router.delete('/notes/:id', ({params},res) => {
    
    let newData = data.filter(obj => obj.id != params.id );
    writeFile('./db/db.json', JSON.stringify(newData), (err)=>{

        if (err) {console.log(err);};
        res.send('done!');
      });
        
});

module.exports = router;