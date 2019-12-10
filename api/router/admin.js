var express = require('express');
var router= express.Router(); 

 //middleware
var multer = require('multer');
var upload =multer({});
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({}));
var blogDAO = require('../daos/blogDAO.js');
var advantiseDAO = require('../daos/advantiseDAO.js');
var productDAO = require('../daos/productDAO.js');


router.get('/addblog', function(req,res){
    res.render('blog.ejs');
});
router.get('/home', function(req,res){
    res.render('index.ejs');
});
router.get('/product', function(req,res){
    res.render('product.ejs');
});
router.get('/addadvertise', function(req,res){
    res.render('advantise.ejs');
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xuanba99:12345678Ba@cluster0-nuumk.mongodb.net/banphukien?retryWrites=true&w=majority";


router.get('/blog', function (req, res) {
    var newFeedback = req.body; //body là bodyparser
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("banphukien"); 
        var query = {};
        dbo.collection('blog').find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    });
});

router.post('/addblog',upload.single('fileImage'), async function(req,res){
    var name = req.body.txtName;
    var content = req.body.txtContent;
    
    if(req.file){
        var image = req.file.buffer.toString("base64"); //get name file image
        var blog ={name:name, content:content, image:image};
        var result = await blogDAO.insert(blog);
        if(result){
            res.send("Good");
        }else{
            res.send('sorry baby');
        }
    }
});
//thêm bài viết api
router.post('/addvertise',upload.single('fileImage'), async function(req,res){
    var name = req.body.txtName;
    
    if(req.file){
        var image = req.file.buffer.toString("base64"); //get name file image
        var blog ={name:name,image:image};
        var result = await advantiseDAO.insert(blog);
        if(result){
            res.send("Good");
        }else{
            res.send('sorry baby');
        }
    }
});
//thêm sản phẩm
router.post('/product',upload.single('fileImage'), async function(req,res){
    var name = req.body.txtName;
    var hang = req.body.txtHang;
    var detail = req.body.txtDetail;
    var price = parseInt(req.body.tXtPrice);
   
    
    if(req.file){
        var image = req.file.buffer.toString("base64"); //get name file image
        var blog ={name:name,hang:hang,detail:detail,price:price,image:image};
        var result = await productDAO.insert(blog);
        if(result){
            res.send("Good");
        }else{
            res.send('sorry baby');
        }
    }
});
//get api san pham
router.get('/productapi', function (req, res) {
    
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("banphukien"); 
        var query = {};
        dbo.collection('product').find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    });
});
//đẩy datta collection adverise lên api.
router.get('/advertise', function (req, res) {
    var newFeedback = req.body; //body là bodyparser
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("banphukien"); 
        var query = {};
        dbo.collection('advertise').find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    });
});

 
module.exports=router;


