angular.module("scpc").controller("PostsListCtrl", ['$scope', '$meteor', '$state', 
  function($scope, $meteor){
     $scope.sort = {createdAt: -1};

    $meteor.autorun($scope, function() {
        $meteor.subscribe('posts', {}, $scope.getReactively('search')).then(function(){
          console.log('Got posts');
        });
    });

    $scope.posts = $meteor.collection(function() {
      return Posts.find({}, {
        //sort : $scope.getReactively('sort')
      });
    });

    // $scope.onTap = function(id) {
    //   $state.go('posts/'+id);
    // }

    $scope.add = function(post){
      $meteor.call('add', post);
    };

    $scope.remove = function(post){
       $meteor.call('remove', post);
    };

    $scope.update = function (post) {
      $meteor.call('update', post); 
    };

    $scope.like = function(post) {
      // console.log(post);
      $meteor.call('like', post); 
    };


  }]);
