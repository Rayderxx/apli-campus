app.controller('TrombiCtrl', ['$scope', 'Student', function ($scope, Student) {
    $scope.students = Student.query();
    
}]);