var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Austin Cameron's Portfolio" });
});

//About Page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

//Contact Page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
//Projects Page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
//Services Page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
module.exports = router;
