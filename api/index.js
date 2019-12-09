var express = require('express');
var app= express();
app.listen(1903);

 

//middel ware
var cors = require('cors'); //allow cross-origin requests
var bodyParser= require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(bodyParser.json());


// //template engine
// app.set('view engine', 'ejs');
// app.set("views",'../src/components/admin');

app.use('/feedback', require('./router/feedback.js'));
app.use('/admin', require('./router/admin.js'));



