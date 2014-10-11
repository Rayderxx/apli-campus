var app = angular.module('AngularRails', [
    'ngRoute',
    'ngResource',
    'templates',
    'ui.calendar'
]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/login', {
            templateUrl: 'login.html'
        })
        .when('/trombi', {
            templateUrl: 'trombi.html'
        })
        .when('/trombi/:id', {
            templateUrl: 'profile.html'
        }).when('/trombi/:id/update', {
            templateUrl: 'profile-update.html'
        })
        .when('/settings', {
            templateUrl: 'settings.html'
        })
        .when('/agenda', {
            templateUrl: 'agenda.html',
            controller: 'AgendaCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});


app.factory('Student',
    function ($resource) {
        return $resource(
            'http://localhost:3000/api/users/:id?user_email=tony.lucas@gmail.com&user_token=xyP6yAKMqeyT98N4uimp', null, {
                'query': {
                    method: 'GET',
                    isArray: true,
                    transformResponse: function (data) {
                        return angular.fromJson(data).users
                    }
                }
            });
    });

app.factory('Session',
    function ($resource) {
        return $resource('http://localhost:3001/sessions', null, {
                'query': {
                    method: 'POST'
                }
            });
    });