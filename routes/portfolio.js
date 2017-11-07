const express = require('express');
const router = express.Router();
const data = require('../models/portfolio-model.js');

router.get('/', function (req, res) {
   res.render('portfolio', {
      project: data
   });
});


router.get('/:id', function (req, res) {
   const id = req.params.id;

   const project = data.find(item => {
      return item._id === id;
   })

   if (project.file === undefined) {
      res.redirect(project.href);
   } else {
      res.render(project.file);
   }
})

module.exports = router;