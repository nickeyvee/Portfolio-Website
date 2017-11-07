const request = require('request');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let posts = [];

function getObject() {
   return new Promise((resolve, reject) => {
      request('https://api.cosmicjs.com/v1/express-website', function (error, response, body) {
         if (error) {
            console.log(error);
         } else {
            resolve(JSON.parse(body));
         }
      })
   })
}

function getPosts() {
   return new Promise((resolve, reject) => {

      request('https://api.cosmicjs.com/v1/express-site/object-type/posts?pretty=true&hide_metafields=true', function (error, response, body) {
         if (error) {
            console.log(error);
         } else {
            const data = JSON.parse(body)

            data.objects.map(post => {
               const date = new Date(post.created_at);
               post.friendly_date = months[date.getMonth()] + ' ' + date.getDate();
            });

            resolve(data);
         }
      })
   })
}

function getPostsOnInit() {
   return getPosts().then(data => {
      data.objects.map(post => posts.push(post));
   })
}

function updateLocals() {
   posts = [];
   return getPosts().then(data => {
      data.objects.map(post => posts.push(post));
      return posts;
   })
}

function getLocalPosts() {
   if (posts) {
      return posts;
   } else {
      throw new error('No posts are stored locally!');
   }
}

module.exports = {
   updateLocals,
   getPostsOnInit,
   getLocalPosts,
   getObject,
   getPosts
}