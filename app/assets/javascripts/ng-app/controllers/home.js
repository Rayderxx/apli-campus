app.controller('HomeCtrl', ['$scope', 'Student', function ($scope, Student) {
    $scope.user = Student.getCurrentUser();
}]);