app.controller('ProfileUpdateCtrl', function ($scope, Student, $timeout) {

    $scope.student = Student.getCurrentUser();

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

    $scope.back = function () {
        window.history.back();
    }

    $scope.logout = function () {
        Student.logout({
            id: $scope.student.id
        });
    }

});