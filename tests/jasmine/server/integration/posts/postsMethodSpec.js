'use strict';

describe('Posts methods', function () {
    var post;

    describe('valid user', function(){
      beforeEach(function(){
        post = {message: "Test Post", public: true, owner: '1'}
        spyOn(Meteor, 'userId').and.returnValue('1');
        spyOn(Meteor, 'user').and.returnValue({username: 'test-user'});
      });

      afterEach(function() {
        if(Posts.find().count() > 3){
          var post = Posts.findOne();
          Posts.remove(post._id);
        }
        // Posts.remove({});
      });

      it("db should be prepopulated with posts", function () {
          expect(Posts.find().count()).toBe(3);
      });

      it("should add a new post", function () {
          Meteor.call('add', post);
          expect(Posts.find().count()).toBe(4);
      });

      it("should remove a post", function () {
        Meteor.call('remove', post);
        expect(Posts.find().count()).toBe(3);
      });

      it("should update a post", function () {
        var postInDb = Posts.findOne();
        var updatedPost = postInDb;
        updatedPost.message = 'Message updated';

        Meteor.call('update', updatedPost);
        var returnedPost = Posts.find({message: 'Message updated'});
        expect(returnedPost.count()).toBe(1);
      });
    });

    describe('no valid user', function () {
        var post;
        beforeEach(function(){
          post = {message: "Test Post", public: true, owner: '1'}
          spyOn(Meteor, 'userId').and.returnValue(null);
          spyOn(Meteor, 'user').and.returnValue({username: 'test-user'});
        });

        it("should add a new post", function () {
            expect(function(){
              Meteor.call('add', post);
            }).toThrow();
        });

        it("should remove a post", function () {
          expect(function(){
            Meteor.call('remove', post);
          }).toThrow();
        });

        it("should update a post", function () {
          var postInDb = Posts.findOne();
          var updatedPost = postInDb;
          updatedPost.message = 'Message updated';

          expect(function(){
            Meteor.call('update', updatedPost);
          }).toThrow();
        });
    });
});
