app.controller('ProfileUpdateCtrl', function ($scope, Student, $routeParams, $timeout) {

    $scope.student = Student.get({
        id: $routeParams.id
    }, function(){
        console.log($scope.student);
    });
    
    $scope.editProfile = function () {
        Student.update(null, $scope.student, function () {
            $scope.updateOk = true;
            $timeout(function () {
                $scope.updateOk = false;
            }, 3000);
        }, function () {
            $scope.updateNotOk = true;
        });
    };


});