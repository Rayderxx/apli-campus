angular.module('AngularRails')
    .controller('TrombiCtrl', function ($scope, Student  ) {
        $scope.loading = true;
        $scope.students = Student.getStudents().then(function (students) {
            $scope.loading = false;
            $scope.students = students;
        }, function (msg) {
            alert(msg);
        });
    });