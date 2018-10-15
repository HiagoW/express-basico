var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send("Home page!");
});

router.get('/about',function(req,res){
	res.send("About");
});

module.exports = router;