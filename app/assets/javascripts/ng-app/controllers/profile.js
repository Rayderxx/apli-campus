angular.module('AngularRails')
    .controller('ProfileCtrl', function ($scope, Student, $routeParams) {
        $scope.loading = true;
        $scope.student = Student.getStudent($routeParams.id).then(function (student) {
            $scope.loading = false;
            $scope.student = student;
        }, function (msg) {
            alert(msg);
        });
    });