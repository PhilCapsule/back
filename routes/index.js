var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Accueil */ 

router.get('/accueil', function(req,res,next){
  res.render('accueil')
})


module.exports = router;
