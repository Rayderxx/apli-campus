app.controller('AgendaAdminCtrl', ['$scope', 'Student', 'Event', function ($scope, Student, Event) {
	$scope.event = {};
    /* event sources array*/
    $scope.eventSources = [$scope.events];
    lang: 'fr'


    $scope.createEvent = function () {
    	console.log($scope.event)
    	Event.create (null, $scope.event , function () {
    	});
    };

}]);