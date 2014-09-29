angular.module('AngularRails')
    .controller('ProfileCtrl', function ($scope, Student, $routeParams) {
        $scope.student = Student.getStudent($routeParams.id)
    });