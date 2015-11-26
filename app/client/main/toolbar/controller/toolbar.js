angular.module("scpc").controller("ToolbarCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
	$scope.toggleMenu = false;
	$scope.onClick = function(){
		$scope.toggleMenu = !$scope.toggleMenu;
	}

  }]);
