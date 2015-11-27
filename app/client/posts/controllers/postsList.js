angular.module("scpc")
.controller("TagsListCtrl", ['$scope', '$meteor', '$state', '$timeout', '$q',
   function($scope, $meteor, $state, $timeout, $q){

     $scope.querySearch = querySearch;
     $scope.alltags = loadtags();
     $scope.tags = [$scope.alltags[0]];
     $scope.filterSelected = true;

     /**
      * Search for tags.
      */
     function querySearch (query) {
       var results = query ?
           $scope.alltags.filter(createFilterFor(query)) : [];
       return results;
     }

     /**
      * Create filter function for a query string
      */
     function createFilterFor(query) {
       var lowercaseQuery = angular.lowercase(query);

       return function filterFn(tag) {
         return (tag._lowername.indexOf(lowercaseQuery) != -1);;
       };

     }

     function loadtags() {
       var tags = [
         'Math',
         'Physics',
         'Arts',
         'Medicine',
         'Computer Science',
         'Misc',
         'Ben Gorion',
         'Beher Sheva',
         'CDI'
       ];

       return tags.map(function (c, index) {
         var cParts = c.split(' ');
         var tag = {
           name: c,
           image: 'http://lorempixel.com/50/50/technics?' + index
         };
         tag._lowername = tag.name.toLowerCase();
         return tag;
       });
     }
}])
.controller("PostsListCtrl", ['$scope', '$meteor', '$state', 
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
