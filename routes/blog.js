var express = require('express');
var router = express.Router();
var repo = require('../services/repo-service.js');

/* GET users listing. */
router.get('/', function (req, res, next) {

   res.render('blog', {
      post: repo.getLocalPosts()
   });
});

router.get('/:id', function (req, res, next) {
   const id = req.params.id;

   const blogPost = repo.getLocalPosts()
      .find(post => {
         if (post._id === id) {
            return post;
         }
      })

   res.render('blog-focus', {
      _id: blogPost._id,
      img: blogPost.metadata.header_image.imgix_url,
      title: blogPost.title,
      author: blogPost.metadata.author,
      content: blogPost.content,
      date: blogPost.friendly_date
   });
})

module.exports = router;