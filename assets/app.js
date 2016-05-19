var app = angular.module('app', [
	'ngRoute',
	'ngMessages'
])
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
angular.module('app')
.controller('LoginCtrl', function($scope, $location, UsersSvc) {
	$scope.login = function(username, password) {
		UsersSvc.login({
			username: username, 
			password: password
		}).then(function(response) {
			$scope.$emit('login', response.data);
			$location.path('/');
		});
	}
});
angular.module('app');

app.controller('PostsCtrl', function($scope, PostsSvc) {
	PostsSvc.fetch().success(function(posts) {
		$scope.posts = posts;
	});
	$scope.addPost = function() {
		if($scope.postBody) {
			PostsSvc.create(
			{
				username: 'dickeyxxx',
				body: $scope.postBody
			}).success(function(post) {
				$scope.posts.unshift(post);
				$scope.postBody = null;
			});
		}
	}
});
angular.module('app');

app.service('PostsSvc', function($http) {
	this.fetch = function() {
		return $http.get('/api/posts');
	}

	this.create = function(post) {
		return $http.post('/api/posts', post);
	}
});
angular.module('app').controller('ProjectsCtrl', function ($scope, $location, ProjectSvc) {
    ProjectSvc.fetch().success(function (projects) {
        $scope.projects = projects;
    });
    
    $scope.createProject = function () {
        if($scope.name) {
            ProjectSvc.create({
                name: $scope.name,
                description: $scope.description,
                client: $scope.client,
                category: $scope.category,
                createdby: 'testUser'
            }).success(function(project) {
                $scope.name = null;
                $scope.description = null;
                $scope.client = null;
                $scope.category = null;
                
                $location.path('/');
            });
        }
    };
});
angular.module('app').service('ProjectSvc', function ($http) {
    this.fetch = function () {
       return $http.get('http://localhost:3000/api/projects');
    };
    
    this.create = function (project) {
        return $http.post('http://localhost:3000/api/projects', project);
    };
});

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
angular.module('app')
.service('UsersSvc', function($http) {
	var svc = this;
	svc.getUser = function() {
		return $http.get('/api/users', {
			headers: {'X-Auth': this.token}
		});
	} 

	svc.login = function(user) {
		return $http.post('/api/sessions', user).then(function(val) {
			svc.token = val.data;
			$http.defaults.headers.common['X-Auth'] = val.data;
			return svc.getUser();
		});
	}

	svc.logout = function() {
		svc.token = null;
		$http.defaults.headers.common['X-Auth'] = null;
	}

	svc.create = function(user) {
		return $http.post('/api/users', user);
	}
})