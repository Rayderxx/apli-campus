var app = angular.module('AngularRails', [
    'ngRoute',
    'ngResource',
    'templates',
    'ui.calendar'
]);

app.factory('Session', ['$http', '$q', function ($http, $q) {
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
}]);
app.run(['Session', '$rootScope', function (Session, $rootScope) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        Session.getHeader().then(function (header) {
            Session.header = header;
        });
    });
}]);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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
        })
        .when('/trombi/:id/update', {
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
}]);


app.factory('Student',['$resource', 'Session', '$rootScope', function ($resource, Session, $rootScope) {
    return $resource('', null, {
        query: {
            url: '/users/formation_users',
            method: 'GET',
            isArray: true,
            transformResponse: function (data) {
                return angular.fromJson(data).users;
            }
        },
        update: {
            method: 'POST',
            url: '/users/update_profile',
            transformRequest: function (data) {
                return JSON.stringify({
                    user: {
                        email: data.email,
                        information_attributes: data.information
                    }
                });
            }
        },
        getCurrentUser: {
            method: 'GET',
            url: '/users/profile',
            transformResponse: function (data) {
                return angular.fromJson(data).student;
            }
        },
        isAdmin: {
            method: 'GET',
            headers: Session.header,
            url: 'http://localhost:3000/api/sessions/is_admin'
        },
        logout: {
            method: 'DELETE',
            headers: Session.header,
            url: '/sessions/:id'
        }
    });
}]);

app.factory('Event',['$resource', 'Session', function ($resource, Session) {
   return $resource('/', null, {
       query: {
           url: '/events',
           method: 'GET',
           isArray: true,
       }
   });
}]);
