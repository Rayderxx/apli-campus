app.controller('ProfileCtrl', function ($scope, Student, $routeParams) {
    Student.get({
        id: $routeParams.id
    }, function (data) {
        $scope.student = data.student;
    });
});