app.controller('AgendaAdminCtrl', function ($scope, Student) {

    Student.isAdmin(function (data) {
        $scope.isAdmin = data.is_admin;
    });


    /* event sources array*/
    $scope.eventSources = [];

    $scope.events = [];
    lang: 'fr'
});