angular.module('app')
    .controller('LoginCtrl', function ($scope, $location, UsersSvc) {
        $scope.login = function (username, password) {
            UsersSvc.login({
                username: username,
                password: password
            }).then(function (response) {
                $scope.$emit('login', response.data);
                $location.path('/');
            });
        }
    });