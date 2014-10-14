app.controller('ProfileCtrl', function ($scope, Student, $routeParams) {
    $scope.student = Student.get({
        id: $routeParams.id
    });
});