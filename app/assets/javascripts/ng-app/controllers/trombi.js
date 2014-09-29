angular.module('AngularRails')
    .controller('TrombiCtrl', function ($scope, Student) {
        $scope.students = Student.getStudents();
    });