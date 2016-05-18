angular.module('app').controller('ProjectsCtrl', function ($scope, ProjectSvc) {
    ProjectSvc.fetch().success(function (projects) {
        $scope.projects = projects;
    });
});