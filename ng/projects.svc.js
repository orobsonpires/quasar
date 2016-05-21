angular.module('app').service('ProjectSvc', function ($http) {
    this.fetch = function () {
        return $http.get('http://localhost:3000/api/projects');
    };

    this.create = function (project) {
        return $http.post('http://localhost:3000/api/projects', project);
    };
});