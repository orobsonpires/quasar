angular.module('app');

app.controller('UsersCtrl', function($scope, $location, UsersSvc) {
	$scope.createUser = function() {
		if($scope.username && $scope.password) {
			UsersSvc.create(
			{
				username: $scope.username,
				password: $scope.password
			}).success(function(user) {
				$scope.username = null;
				$scope.password = null;

				$location.path('/login');
			});
		}
	}
});