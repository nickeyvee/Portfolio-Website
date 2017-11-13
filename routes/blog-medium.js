var express = require('express');
var router = express.Router();
// var repo = require('../services/repo-service.js');
var blogPosts = require('../services/medium-service.js');

/* GET users listing. */
router.get('/', function (req, res, next) {

   // console.log(blogPosts.getStoredPosts());

   res.render('blog', {
      post: blogPosts.getStoredPosts()
   });
});

router.get('/:id', function (req, res, next) {
   const id = req.params.id;

   const Post = blogPosts.getStoredPosts()
      .find(post => {
         if (post._id === id) {
            return post;
         }
      })

   blogPosts.getArticleById(id)
      .then(data => {
         return blogPosts.mapArticleData(data)
      })
      .then(data => {
         
         const HTMLstring = blogPosts.getStoredArticle();
         
         // console.log(HTMLstring);
         // console.log('-------------------------------------');

         res.render('blog-focus', {
            _id: Post._id,
            img: Post.imgFeature,
            title: Post.title,
            author: Post.author,
            content: HTMLstring,
            date: Post.friendly_date
         });
      })
})

router.post('success', function (req, res, next) {
   // console.log(res.header);
   res.end();
})

module.exports = router;