var express = require('express');
var router = express.Router();

var repo = require('../services/repo-service.js');

/* GET home page. */
router.get('/', function (req, res, next) {
   // if (process.env.DEV) {
      repo.getPosts().then(() => {
         console.log('Posts retrieved.')
      })
   // }
   res.render('home');
});

module.exports = router;