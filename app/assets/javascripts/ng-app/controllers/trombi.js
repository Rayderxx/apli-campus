app.controller('TrombiCtrl', function ($scope, Student, Session) {
    $scope.students = Student.query();
});