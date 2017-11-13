'use strict';
const util = require('util');
const expect = require('chai').expect;


describe('medium-service.js', function () {
   it('should exist', function () {
      const blogData = require('../services/medium-service.js');
      expect(blogData).to.not.be.undefined;
   })
})

const blogData = require('../services/medium-service.js');

describe('getParsedJSON()', function () {
   it('should return a promise containing an object', function () {
      return blogData.getParsedJSON().then(data => {
         expect(data).to.be.an('Object');
      })
   });
})


describe('mapPostData()', function () {
   it('should return an array', function () {
      return blogData.getParsedJSON()
         .then(data => {
            expect(blogData.mapPostData(data)).to.be.an('Array');
         })
   })

   it('should contain data for blog posts', function () {
      return blogData.getParsedJSON()
         .then(data => {
            expect(blogData.mapPostData(data)).to.not.be.empty;
         })
   })
})


describe('getStoredPosts()', function () {
   it('should return an array with contents', function () {
      // console.log(blogData.getStoredPosts());
      expect(blogData.getStoredPosts()).to.not.be.empty;
   })
})

describe('getArticleById', function () {
   it('should return an object', function () {
      const Posts = blogData.getStoredPosts();

      return blogData.getArticleById(Posts[0]._id)
         .then(data => {
            // console.log(data);
            expect(data).to.be.an('Object');
         })
   })
})


describe('mapArticleData()', function () {
   const Posts = blogData.getStoredPosts();

   // console.log(Posts);

   it('should return an array', function () {
      return blogData.getArticleById(Posts[0]._id)
         .then(data => {
            // console.log(blogData.mapArticleData(data));
            return blogData.mapArticleData(data);
         })
         .then(data => {
            expect(data).to.be.an('Array');
         })
   })


   it('should contain something', function () {
      return blogData.getArticleById(Posts[0]._id)
         .then(data => {
            return blogData.mapArticleData(data);
         })
         .then(data => {
            expect(data).to.not.be.empty;
         })
   })
})

describe('getStoredArticle()', function () {
   it('should not be empty', function () {
      // console.log(blogData.getStoredArticle());
      expect(blogData.getStoredArticle()).to.not.be.empty;
   })
})