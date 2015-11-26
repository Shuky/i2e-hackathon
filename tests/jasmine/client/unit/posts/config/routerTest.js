'use strict';

describe('Post router', function () {
    var rootScope,
        state,
        location;

    beforeEach(module('scpc'));
    beforeEach(inject(function ($rootScope, $state, $location) {
        rootScope = $rootScope;
        state = $state;
        location = $location;
    }));

    it('should respond posts state', function() {
        expect(state.href('posts.list')).toEqual('/posts/list');
    });

    it('redirects to posts page', function() {
        location.path('/posts/list');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/posts/list");
    });
});
