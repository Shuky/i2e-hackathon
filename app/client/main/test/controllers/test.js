angular.module("scpc").controller("TestCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
	$scope.toggleMenu = false;
	$scope.onClick = function(){
		$scope.toggleMenu = !$scope.toggleMenu;
	}

  }]);
