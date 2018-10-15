var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

router.post('/', function(req, res, next) {
  var nome = req.body.nome,
  	  senha = req.body.senha;
  	  MongoClient.connect(url, function(err, db) {
  	if (err) throw err;
  	var dbo = db.db("dbexpress");
  	var myobj = { name: nome, pass: senha };
	  dbo.collection("usuarios").insertOne(myobj, function(err, res) {
	    if (err) throw err;
	    console.log("1 document inserted");
	    db.close();
	  });
	});
  res.redirect('/');
});

module.exports = router;
