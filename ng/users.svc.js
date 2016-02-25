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

	svc.create = function(user) {
		return $http.post('/api/users', user);
	}
})