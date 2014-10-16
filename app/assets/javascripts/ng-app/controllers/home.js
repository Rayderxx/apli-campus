app.controller('HomeCtrl', function ($scope, Student) {
    $scope.user = Student.getCurrentUser();
});