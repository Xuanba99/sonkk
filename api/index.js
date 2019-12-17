var express = require('express');
var app= express();
app.listen(process.env.PORT||1903);
app.use(express.static(__dirname+'/views'));

//middel ware
var cors = require('cors'); //allow cross-origin requests
var bodyParser= require('body-parser');
 

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));//không có dòng này thì khi đăng nhập sẽ ko lấy được giá trị từ body gửi lên

app.use(bodyParser.json());//không có dòng này thì post giá trị lên data không nhận đc
var session = require('express-session');
app.use(session({secret:"sonkk123"}));
app.use(function (req,res,next){
    res.locals.session=req.session;
    next();
});
// //template engine
app.set('view engine', 'ejs');
app.set("views",'views');

app.use('/user', require('./router/feedback.js'));
app.use('/admin', require('./router/admin.js'));

