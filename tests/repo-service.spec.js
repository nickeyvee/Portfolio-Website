'use strict';
const util = require('util');
const expect = require('chai').expect;

describe('repo-service', function () {
   const repo = require('../services/repo-service.js');

   it('does exist', function () {
      expect(repo).to.not.be.undefined;
   });
})

const repo = require('../services/repo-service.js');

// describe('should process new posts', function() {
//    it('should accept database queries', function(){
//       expect(repo.newPost())
//    })
// })