angular.module('app').controller('ProjectsCtrl', function ($scope, $location, ProjectSvc) {
    ProjectSvc.fetch().success(function (projects) {
        $scope.projects = projects;
    });

    $scope.createProject = function () {
        if ($scope.name) {
            ProjectSvc.create({
                name: $scope.name,
                description: $scope.description,
                client: $scope.client,
                category: $scope.category,
                createdby: 'testUser'
            }).success(function (project) {
                $scope.clear();
            });
        }
    };

    $scope.clear = function () {
        $scope.name = null;
        $scope.description = null;
        $scope.client = null;
        $scope.category = null;
        
        $location.path('/');
    };
});