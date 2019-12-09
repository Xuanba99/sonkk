var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xuanba99:12345678Ba@cluster0-nuumk.mongodb.net/banphukien?retryWrites=true&w=majority"; 
var ProductDAO = {
     insert: function(product){ //ham insert cho anh quảng cáo
        //insert to MondoBD
        return new Promise(function(resolve, reject){
            +
            MongoClient.connect(url, function (err, db) { 
                if(err) throw err;
                var dbo= db.db("banphukien");
                dbo.collection("advertise").insertOne(product, function(err, res){
                    if(err) return  reject(err);
                    resolve(res.insertedCount>0? true: false);
                    
                });
            });
        });
       
        // return false;
    }
     
};

module.exports= ProductDAO;