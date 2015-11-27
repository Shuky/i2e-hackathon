angular.module('scpc').config(['$stateProvider',
  function($stateProvider){

    $stateProvider
      .state('posts', {
        parent: 'root',
        abstract: true,
        url: '/posts',
        template: '<div ui-view/><div ui-view="posts"/>'
      })
      .state('posts.list', {
        url: '/list',
        views: {
          '': {
            templateUrl: 'app/client/posts/views/tags-list.ng.html',
            controller: 'TagsListCtrl'
          },
          'posts': {
            templateUrl: 'app/client/posts/views/posts-list.ng.html',
            controller: 'PostsListCtrl'
          }
        }
      })
      .state('posts.view', {
        url: '/view/:id',
        templateUrl: 'app/client/posts/views/post-view.ng.html',
        controller: 'PostViewCtrl'
      })

      ;
  }]);
