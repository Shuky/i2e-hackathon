angular.module("scpc").run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
      $state.go("login");
    }
  });
}]);

angular.module('scpc').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('root', {
        views: {
          '':{
            template: '<div ui-view=""></div>'
          },
          'toolbar': {
            controller: 'ToolbarCtrl',
            templateUrl: 'app/client/main/toolbar/views/toolbar.ng.html'
          }
        }
      })
      .state('home', {
        parent: 'root',
        url: '/posts/list'
      })
      .state('test', {
        parent: 'root',
        url: '/test',
        controller: 'TestCtrl',
        templateUrl: 'app/client/main/test/views/test.ng.html'
      });

    $urlRouterProvider.otherwise("/posts/list");
  }]);
