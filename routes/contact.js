var express = require('express');
var router = express.Router();
var sendMail = require('../services/mail-service.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact');
});

router.post('/submission', function(req, res) {
   console.log('post recieved');
   console.log(req.body);
   sendMail(req.body, function(msg) {
      console.log(msg);
      if(msg.error) {
         res.status(500).send(msg.error);
      } else {
         res.json(msg);
      }
   });
})

module.exports = router;