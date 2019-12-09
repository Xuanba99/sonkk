var express = require('express');
var router= express.Router();
 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xuanba99:12345678Ba@cluster0-nuumk.mongodb.net/banphukien?retryWrites=true&w=majority";

 
router.post('/add', function (req, res) {
    var name = req.body.txtName; //body là bodyparser
    var email = req.body.txtEmail; //body là bodyparser
    var problem = req.body.txtProblem; //body là bodyparser
    var content = req.body.txtContent; //body là bodyparser
    var feedBack ={name:name,email:email,problem:problem,content:content};
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('banphukien');
        dbo.collection('form').insertOne(feedBack, function (err, result) {
            if (err) throw err;
            var kq = false;
            if (result.insertedCount > 0)
                kq = true;
            console.log(kq);
            res.json(kq);
        });

    });


});
 

module.exports= router;


