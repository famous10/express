var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";
var title = 'Todo App in Express';
var dbName = "todoDb";
/* GET home page. */
router.get('/', function(req, res, next) {

  MongoClient.connect(url, function(err, client) {
    if(err) throw(err);
    //creating or accesing Database
    var db = client.db(dbName);
     
    db.collection("todos").find({}).toArray(function (err, result) {
      if (err) throw(err);
      res.render('index', {title: title, todos: result}); 
    })
  })
});

router.get('/delete/id', function(req, res, next){
  res.send("HELLO WORLD:" + Req.params.id);
})

router.post('/todo', function(req, res, next) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw(err);

    var formData = req.body;

    var name = formData.todo;
    var date = new Date();
    var db = client.db(dbName)
    var doc = { name:formData.todo, date: date };

    db.collection("todos").insertOne(doc, function(err, insertres) {
      if(err) throw(err);
      res.render('index', {title:title,count:1});
    })
  })
})


module.exports = router;