var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  title:"Assignment 2"
});
/*GET Home page*/
router.get('/home',function(req,res,next) {
  res.render('index',{
    title:'Home '

  });
});
/*GET About page*/
router.get('/about',function(req,res,next) {
  res.render('index',{
    title:'About '
    
  });
});
/*GET About page*/
router.get('/project',function(req,res,next) {
  res.render('index',{
    title:'Project'
  })
})
/*GET Contact me page*/
router.get('/contact',function(req,res,next) {
  res.render('index',{
    title:'Contact Me '
  })
})

module.exports = router;
