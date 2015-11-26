'use strict';

describe('Posts methods', function () {
    var post;

    describe('valid user', function(){
      beforeEach(function(){
        post = {message: "Test Post", public: true, owner: '1'}
        spyOn(Meteor, 'userId').and.returnValue('1');
        spyOn(Meteor, 'user').and.returnValue({username: 'test-user'});
        spyOn(Posts, 'insert');
        spyOn(Posts, 'remove');
        spyOn(Posts, 'update');
      });

      afterEach(function() {
      });

      it("should add a new post", function () {
          Meteor.call('add', post);
          expect(Posts.insert).toHaveBeenCalled();
      });

      it("should remove a post", function () {
        Meteor.call('remove', post);
        expect(Posts.remove).toHaveBeenCalled();
      });

      it("should update a post", function () {
        var postInDb = Posts.findOne();
        var updatedPost = postInDb;
        updatedPost.message = 'Message updated';

        Meteor.call('update', updatedPost);
        expect(Posts.update).toHaveBeenCalled();
      });
  });

  describe('no valid user', function () {
      var post;
      beforeEach(function(){
        post = {message: "Test Post", public: true, owner: '1'}
        spyOn(Meteor, 'userId').and.returnValue(null);
        spyOn(Meteor, 'user').and.returnValue({username: 'test-user'});
        spyOn(Posts, 'insert');
        spyOn(Posts, 'remove');
        spyOn(Posts, 'update');
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
