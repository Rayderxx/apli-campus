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
        .when('/trombi/:id', {
            templateUrl: 'profile.html'
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

app.service('Student', function ($http, $q) {
    var that = this;
    this.students = false;

    this.getStudents = function () {
        var deffered = $q.defer();
        if (that.students !== false) {
            console.log(that.students);
            deffered.resolve(that.students);
        } else {
            $http.get('http://localhost:3001/users/formation_users')
                .success(function (data, status) {
                    that.students = data.users;
                    deffered.resolve(that.students);
                }).error(function (data, status) {
                    deffered.reject("Impossible de récupérer les données.");
                });
        }
         
        return deffered.promise;
    };

    this.getStudent = function (id) {
        var deffered = $q.defer();
        var student = {};
        var student = that.getStudents().then(function (posts) {
            angular.forEach(posts, function (value, key) {
                if (value.id == id) {
                    student = value;
                }
            });
            return deffered.resolve(student);
        }, function (msg) {
            deffered.reject(msg);
        });
        return deffered.promise;
    };
});