angular.module("scpc").directive('compile', compileDirective).controller("PostViewCtrl", ['$scope', '$meteor', '$state',
  function($scope, $meteor, $state){


    $meteor.autorun($scope, function() {
        $meteor.subscribe('posts', {}, $scope.getReactively('search')).then(function(){
          console.log('Got posts');
        });
    });
    console.log("Finding post:" + $state.params.id);
    $scope.cur_post = $meteor.call('get_post', $state.params.id).then(function (posts) {
        $scope.cur_post = posts[0];
        console.log($scope.cur_post);
    });

    
    $scope.getPostContent = function () {
        // body...
    }

    //  $scope.sort = {createdAt: -1};

    // $meteor.autorun($scope, function() {
    //     $meteor.subscribe('posts', {}, $scope.getReactively('search')).then(function(){
    //       console.log('Got posts');
    //     });
    // });

    // $scope.posts = $meteor.collection(function() {
    //   return Posts.find({}, {
    //     sort : $scope.getReactively('sort')
    //   });
    // });

    // $scope.add = function(tweet){
    //   $meteor.call('add', tweet);
    // };

    // $scope.remove = function(tweet){
    //    $meteor.call('remove', tweet);
    // };

    // $scope.update = function(tweet) {
    //   $meteor.call('update', tweet); 
    // };

    $scope.addComment = function() {

    }

    $scope.removeComment = function() {

    }

    $scope.updateComment = function() {

    }

    $scope.showComment = function(comment) {

    }

    $scope.hideComment = function(comment) {

    }

    $scope.addConcensusComment = function(comment) {

    }

    $scope.heart = function(comment) {

    }

    $scope.like = function(post) {
      $meteor.call('like', post); 
    };


  }]);


function compileDirective($compile) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      //Watch for changes to expression
      scope.$watch(attrs.compile, function(newVal) {

        //Compile creates a linking function
        // that can be used with any scope
        var link = $compile(newVal);

        //Executing the linking function
        // creates a new element
        var newElem = link(scope);

        //Which we can then append to our DOM element
        elem.append(newElem);
      });
    }
  };

}