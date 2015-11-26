angular.module("scpc").directive('iecomment', commentDirective).controller("TestCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
	$scope.toggleMenu = false;
	$scope.onClick = function(){
		$scope.toggleMenu = !$scope.toggleMenu;
	}

  }]);

var commentDirTemplate = '<span>'
 + ' <span ng-click="toggle=!toggle" ng-transclude class="comment_selection"></span>'
 + ' <div ng-if="toggle" class="comment_section">'
 + '   <md-card class="comment"><md-card-content>'
 + '  <img class="comment-thumb" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>'
 + '   <span>{{comment.message}}</span>'
 + '  </md-card-content></md-card>'
 + '</div>'
 + '</span>';

function commentDirective($compile){
      return {
        restrict: 'ACE',
        link: function(scope, elem, attrs)
        {
            scope.comment = {};
            scope.comment.message = "This is a comment text that is very very long";
            scope.toggle = false;
        },
        scope: { 
          commentid:'@',
         },
        template: commentDirTemplate,
        transclude: true

    }
  };