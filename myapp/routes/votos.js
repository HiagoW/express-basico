var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/', function(req, res, next) {
  var voto = req.query.v;
  res.write(voto);
  if(voto!='a'&&voto!='b'){
  	res.write("Voto invalido!");
  } else {
  	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("dbexpress");
	  dbo.collection("votos").updateOne(
	  	{ pesq:1 },
	  	{ $inc: {[voto]: 1}}
	  );	
	});
  }
  res.redirect('/votos.html');
});

module.exports = router;
