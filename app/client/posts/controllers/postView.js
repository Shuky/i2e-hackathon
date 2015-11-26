angular.module("scpc")
.directive('iecomment', commentDirective)
.directive('compile', compileDirective)
.controller("PostViewCtrl", ['$scope', '$meteor', '$state',
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

    $scope.replaceSelectionText = function () {
        var text = "";
        var sel, range;

        if (!$scope.cur_post)  // check if the promise is already finished
            return text;

        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }

        if (text == ""){
            return text;
        }

        console.log("Selected text is:"  + text);
        replacementText = "<iecomment>" + text + "</iecomment>";

        
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                range.insertNode(document.createTextNode(replacementText));
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.text = replacementText;
            }
                    // $state.go($state.current, {}, {reload: true});

        }


  }]);


function compileDirective($compile) {
  return {
    restrict: 'A',
    replace: true,
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

function commentDirective($compile){
      return {
        restrict: 'ACE',
        link: function(scope, elem, attrs)
        {
                console.log("GSDGSD");
                if (typeof($scope.category) != 'undefined')
                {

                }

        },
        scope: { 
          comment_id:'@',
         },
        template: '<div>fdsfjasflfsa</div>'
    }
  };