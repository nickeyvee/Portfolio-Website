var express = require('express');
var router = express.Router();

var repo = require('../services/repo-service.js');

router.post('/1iosqff1', function (req, res, next) {
   repo.updateLocals().then(data => {
      console.log(req.headers);
      console.log('----------------------------------------------');
      console.log(req.body);
      console.log('----------------------------------------------');
      console.log('POSTS ARRAY LENGTH: ' + data.length);
      console.log('----------------------------------------------');
      console.log("A new object has been created, local cache updated.")
      res.send("A new object has been created, local cache updated.");
      console.log('----------------------------------------------');      
      res.end();
   })
   .catch(err => {
      console.log(err);
   })
});

module.exports = router;