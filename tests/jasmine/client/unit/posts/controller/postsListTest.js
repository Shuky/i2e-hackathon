'use strict';

describe('PostsListCtrl', function () {
    var scope, createController;

    beforeEach(module('scpc'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('PostsListCtrl', {
                '$scope': scope
            });
        };
        createController();
    }));

    it('sort scope is correct', function() {
        expect(scope.sort).toEqual({createdAt: -1});
    });

    // it('add method is defined', function() {
    //     expect(scope.add).toBeDefined();
    // });

    it('remove method is defined', function() {
        expect(scope.remove).toBeDefined();
    });

    it('update method is defined', function() {
        expect(scope.update).toBeDefined();
    });

    describe('Meteor methods called', function(){
      var posts;
      beforeEach(function(){
        posts = {message: "Test Posts", public: true}
        spyOn(Meteor, 'call');
      });

      // it('add called', function() {
      //   scope.add(posts);
      //   expect(Meteor.call).toHaveBeenCalledWith('add', (posts), jasmine.any(Function));
      // });

      it('update called', function() {
        scope.update(posts);
        expect(Meteor.call).toHaveBeenCalledWith('update', (posts), jasmine.any(Function));
      });

      it('remove called', function() {
        scope.remove(posts);
        expect(Meteor.call).toHaveBeenCalledWith('remove', (posts), jasmine.any(Function));
      });
    });
});
