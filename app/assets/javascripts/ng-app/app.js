var app = angular.module('AngularRails', [
    'ngRoute',
    'templates'
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
        .when('/settings', {
            templateUrl: 'settings.html'
        })
        .when('/agenda', {
            templateUrl: 'agenda.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});