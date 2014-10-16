app.controller('ProfileCtrl', function ($scope, Student, $routeParams) {
    Student.query(function (students) {
        l = students.length;
        for (i = 0; i < l; i++) {
            if ($routeParams.id == students[i].id) {
                $scope.student = students[i];
            }
        }
    });
});