app.controller('TrombiCtrl', function ($scope, Student) {
    $scope.students = Student.query(function(){
    });
    
});