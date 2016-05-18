angular.module('app')
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'ProjectsCtrl', 
		templateUrl: 'projects.html'
	})
	.when('/register', {
		controller: 'UsersCtrl', 
		templateUrl: 'register.html'
	})
	.when('/login', {
		controller: 'LoginCtrl', 
		templateUrl: 'login.html'
	})
    .when('/project', {
        controller: 'ProjectsCtrl', 
		templateUrl: 'project.html'
    })
})