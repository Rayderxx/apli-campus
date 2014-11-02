app.controller('AgendaAdminCtrl', ['$scope', 'eventData', function ($scope, eventData) {
    $scope.event = {};
    $scope.displayForm = true;

    $scope.addEvent = function(event, eventForm){
        if(eventForm.$valid) {
            var start = moment(event.dateStart+" "+event.timeStart)
            var end   = moment(event.dateStart+" "+event.timeEnd)
            eventData.create(event).then(function(response){
                $scope.events.push({
                    id: response.event_admin.id,
                    title:event.description, 
                    start: new Date(start.year(), start.month(), start.date(), start.hour(), start.minute() ), 
                    end: new Date(end.year(), end.month(), end.date(), end.hour(), end.minute() ),
                    allDay: false
                });
                $scope.event = {};
            });
        }
    }

    $scope.switchEvent = function(){
        $scope.displayForm = true;
        $scope.event = {};
    }

    $scope.removeEvent = function(event){
        eventData.destroy(event.id).then(function(data){
            var index = $scope.filterEvents(event);
            eventData.destroy(event).then(function(data){
            });
            $scope.events.splice(index,1);
            $scope.displayForm = true;
            $scope.event = {};
        });
    }

    $scope.updateEvent = function(event, eventForm){
        var index = false;
        if(eventForm.$valid) {
            var index = $scope.filterEvents(event);
            var start = moment(event.dateStart+" "+event.timeStart)
            var end   = moment(event.dateStart+" "+event.timeEnd)
            eventData.update(event).then(function(data){
                $scope.events[index] = {
                    id: event.id,
                    title: event.description, 
                    start: new Date(start.year(), start.month(), start.date(), start.hour(), start.minute() ), 
                    end: new Date(end.year(), end.month(), end.date(), end.hour(), end.minute() ),
                    allDay: false
                }
            });
        }
    }

    $scope.filterEvents = function(event){
        var index = false
        _.filter($scope.events, function(value){ 
            if(value.id  == event.id) {
                index = _.indexOf($scope.events, value);
            } 
        });
        return index
    }

    $scope.alertEventOnClick = function(event){
        $scope.displayForm = false;
        var start = moment(event.start)
        var end   = moment(event.end)
        $scope.event = {
            id: event.id,
            description: event.title,
            dateStart: start.format("YYYY-M-DD"),
            timeStart: start.format("HH:mm"),
            dateEnd: end.format("YYYY-M-DD"),
            timeEnd: end.format("HH:mm"),
        }
    }
    /* config object */
    $scope.uiConfig = {
        calendar: {
            editable: true,
            defaultView: 'agendaWeek',
            header: {
                left: '',
                center: 'title',
                right: 'prev,next'
            },
            firstDay: 1,
            lang: "fr",
            eventResize: $scope.alertOnResize,
            eventClick: $scope.alertEventOnClick,
            axisFormat: 'H:mm',
            minTime: '09:00:00',
            maxTime: '19:00:00',
            timeFormat: {
                agenda: 'H:mm{ - H:mm}'
            }
        }
    }
    eventData.fetch().then(function(data){
        angular.forEach(data.events, function(value, key) {
            var start = moment(value.date_start)
            var end   = moment(value.date_end)
            $scope.events.push(
                {
                    id: value.id,
                    title:value.description, 
                    start: new Date(start.year(), start.month(), start.date(), start.hour(), start.minute() ), 
                    end: new Date(end.year(), end.month(), end.date(), end.hour(), end.minute() ),
                    allDay: false
                }
            );
        });
    });

    $scope.events = [];
    $scope.eventSources = [$scope.events];
}]);