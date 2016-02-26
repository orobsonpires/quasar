angular.module('app')
.controller('ApplicationCtrl', function($scope, $location, UsersSvc) {
	
	$scope.$on('login', function(_, user) {
		$scope.currentUser = user;
	});

	$scope.deleteCurrentUser = function() {
		$scope.currentUser = null;
		UsersSvc.logout();
		$location.path('/login');
	}
})