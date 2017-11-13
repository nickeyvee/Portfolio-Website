const request_promise = require('request-promise');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let localPosts = [];
let localArticle = [];

function getParsedJSON() {
   const posts = request_promise('https://medium.com/@nickey_vee/latest?format=json')
      .then(data => {
         // the response body is not a valid JSON string.
         // data_trimmed removes a section of the response body
         // so it can be parsed.
         const data_trimmed = data.slice(data.indexOf('{'), data.length);

         return JSON.parse(data_trimmed)
      })
   return Promise.resolve(posts);
}


function mapPostData(data) {
   const posts_arr = [];
   const posts_obj = data.payload.references.Post;
   const img_url = 'https://cdn-images-1.medium.com/fit/t/1200/360/'


   for (const prop in posts_obj) {
      const Post = posts_obj[prop];
      const date = new Date(Post.firstPublishedAt);

      const model = {
         _id: Post.id,
         author: data.payload.user.name,
         title: Post.title,
         subtitle: Post.content.subtitle,
         urlParam: Post.uniqueSlug,
         friendly_date: months[date.getMonth()] + ' ' + date.getDate(),
         imgFeature: img_url + Post.virtuals.previewImage.imageId
      }

      posts_arr.push(model);
      localPosts.push(model);
   }
   return posts_arr;
}

function getStoredPosts() {
   return localPosts;
}

function getArticleById(id) {
   return request_promise(`https://medium.com/@nickey_vee/${id}?format=json`)
      .then(data => {
         const data_trimmed = data.slice(data.indexOf('{'), data.length);
         return JSON.parse(data_trimmed)
      })
}

function mapArticleData(data) {
   const paragraphs = data.payload.value.content.bodyModel.paragraphs;
   const article = [];

   localArticle = [];

   for (const prop in paragraphs) {
      const target = paragraphs[prop];

      if (!target.metadata || target.text.length > 0) {
         if (target.text.slice(0, 4) === 'http') {
            target.text = `<pre><code>${target.text}</code></pre>`
         } else {
            target.text = `<p>${target.text}</p>`;
         }
      } else if (target.metadata) {
         target.text = `<img src="https://cdn-images-1.medium.com/max/1200/${target.metadata.id}">`;
      }
      article.push(paragraphs[prop]);
      localArticle.push(paragraphs[prop]);
   }
   return article;
}


function getStoredArticle(arr) {
   if (arr) {
      const HTMLarray = arr.map(data => data.text);
      return HTMLarray.slice(2, HTMLarray.length).join('');
   } else {
      const HTMLarray = localArticle.map(data => data.text);
      return HTMLarray.slice(2, HTMLarray.length).join('');
   }
}

function deleteStorage() {
   localPosts = [];
   localArticle = [];
}

module.exports = {
   getParsedJSON,
   mapPostData,
   getStoredPosts,
   getArticleById,
   mapArticleData,
   getStoredArticle,
   deleteStorage
}