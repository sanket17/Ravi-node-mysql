const express=require('express');
const router=express();
const db = require('./dbconfig');


router.get('/',function(req,res){
    console.log('in func');
    //res.send('Hello WORLD');
    db.query("select * from mtr_status", function(err, result){console.log('in query function');
        if(err){
            
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

router.post('/', function (req, res) {
    res.send('Got a POST request')
});

router.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
});

router.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})


module.exports = router;