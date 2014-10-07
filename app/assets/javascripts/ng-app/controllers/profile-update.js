app.controller('ProfileUpdateCtrl', function ($scope, Student, $routeParams) {
   $scope.student = Student.get({id: $routeParams.id}, function(data){
        $scope.student = data.student;
    });
});