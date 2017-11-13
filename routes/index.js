var express = require('express');
var router = express.Router();

// var repo = require('../services/repo-service.js');
var blogPosts = require('../services/medium-service.js');

/* GET home page. */
router.get('/', function (req, res, next) {
   blogPosts.deleteStorage();

   blogPosts.getParsedJSON()
      .then(data => {
         return blogPosts.mapPostData(data);
      })
      .then(() => {
         console.log('Posts retrieved.');
      })
   res.render('home');
});

module.exports = router;