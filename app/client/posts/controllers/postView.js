angular.module("scpc").controller("PostViewCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
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


  }]);