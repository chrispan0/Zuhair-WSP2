var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res) {
  res.render('home', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

/* GET projects page. */
router.get('/project', function(req, res) {
  res.render('projects', { title: 'Projects' });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;

