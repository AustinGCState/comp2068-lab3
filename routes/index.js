var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express on Azure' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
module.exports = router;
