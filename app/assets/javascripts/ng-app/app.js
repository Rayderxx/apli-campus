var app = angular.module('AngularRails', [
    'ngRoute',
    'ngResource',
    'templates',
    'ui.calendar'
]);

app.factory('Session', function ($http, $q) {
    return {
        getHeader: function () {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/sessions/header'
            }).
            success(function (data, status, headers, config) {
                deferred.resolve(data)
            }).
            error(function (data, status, headers, config) {
                deferred.reject(status)
            });

            return deferred.promise;
        }
    }
});


app.run(function (Session, $rootScope) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        Session.getHeader().then(function (header) {
            Session.header = header;
        });
    });


});
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            resolve: {
                header: function (Session) {
                    Session.getHeader().then(function (header) {
                        Session.header = header;
                    });
                }
            }
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
        .when('/agenda-admin', {
            templateUrl: 'agenda-admin.html',
            controller: 'AgendaAdminCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});



app.factory('Student',
    function ($resource, Session, $rootScope) {
        return $resource('http://localhost:3000/api', null, {
            get: {
                url: 'http://localhost:3000/api/users/:id',
                headers: Session.header,
                transformResponse: function (data) {
                    return angular.fromJson(data).student;
                }
            },
            query: {
                url: 'http://localhost:3000/api/users/users_formation/',
                headers: Session.header,
                method: 'GET',
                isArray: true,
                transformResponse: function (data) {
                    return angular.fromJson(data).users;
                }
            },
            update: {
                method: 'PUT',
                url: 'http://localhost:3000/api/users/update_profile/',
                headers: Session.header,
                transformRequest: function (data) {
                    return JSON.stringify({
                        user: {
                            email: data.email,
                            information_attributes: data.information
                        }
                    });
                }
            },
            isAdmin: {
                method: 'GET',
                url: 'http://localhost:3000/api/sessions/is_admin',
                headers: {
                    'X-User-Email': 'tony3lucas@hotmail.fr',
                    'X-User-Token': 'xyP6yAKMqeyT98N4uimp'
                }
            }
        });
    });