angular.module('scpc').config(['$stateProvider',
  function($stateProvider){

    $stateProvider
      .state('posts', {
        parent: 'root',
        abstract: true,
        url: '/posts',
        template: '<ui-view/>'
      })
      .state('posts.list', {
        url: '/list',
        templateUrl: 'app/client/posts/views/posts-list.ng.html',
        controller: 'PostsListCtrl'
      })
      .state('posts.view', {
        url: '/view/:id',
        templateUrl: 'app/client/posts/views/post-view.ng.html',
        controller: 'PostViewCtrl'
      })

      ;
  }]);
