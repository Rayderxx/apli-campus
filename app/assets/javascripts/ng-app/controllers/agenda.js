app.controller('AgendaCtrl', function ($scope) {


    // $scope.eventSources = [];

    /* config object */
    $scope.uiConfig = {
        calendar: {
            editable: false,
            header: {
                left: '',
                center: 'title',
                right: 'prev,next'
            },
            firstDay: 1,
            lang: "fr",
            eventResize: $scope.alertOnResize
        }
    };
    $scope.events = [
        {
            title: 'All Day Event',
            start: new Date(),
            end: new Date()
        },
    ];
    $scope.eventSources = [$scope.events];
});