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

app.service('Student', function () {
    this.students = [
        {
            "no_etud": 7493276,
            "email": "searskoch@enquility.com",
            "phone": "O650154768",
            "name": "Poole Huff",
            "promo": "2014-2015",
            "formation": "LP Développement Web et Web Mobile",
            "facebook": "",
            "twitter": "",
            "linkedin": "",
            "googleplus": "",
            "picture": "http://api.randomuser.me/portraits/thumb/women/17.jpg"
      },
        {
            "no_etud": 7926008,
            "email": "poolehuff@enquility.com",
            "phone": "O647673682",
            "name": "Figueroa Nieves",
            "promo": "2014-2015",
            "formation": "LP Développement Web et Web Mobile",
            "facebook": "",
            "twitter": "",
            "linkedin": "",
            "googleplus": "",
            "picture": "http://api.randomuser.me/portraits/thumb/women/14.jpg"
      },
        {
            "no_etud": 6350036,
            "email": "figueroanieves@enquility.com",
            "phone": "O686242020",
            "name": "Burke Stafford",
            "promo": "2014-2015",
            "formation": "LP Développement Web et Web Mobile",
            "facebook": "",
            "twitter": "",
            "linkedin": "",
            "googleplus": "",
            "picture": "http://api.randomuser.me/portraits/thumb/women/28.jpg"
      },
        {
            "no_etud": 1149021,
            "email": "burkestafford@enquility.com",
            "phone": "O621490817",
            "name": "Pugh Vinson",
            "promo": "2014-2015",
            "formation": "LP Développement Web et Web Mobile",
            "facebook": "",
            "twitter": "",
            "linkedin": "",
            "googleplus": "",
            "picture": "http://api.randomuser.me/portraits/thumb/women/20.jpg"
      },
        {
            "no_etud": 5686053,
            "email": "pughvinson@enquility.com",
            "phone": "O638598220",
            "name": "Maxine Estrada",
            "promo": "2014-2015",
            "formation": "LP Développement Web et Web Mobile",
            "facebook": "",
            "twitter": "",
            "linkedin": "",
            "googleplus": "",
            "picture": "http://api.randomuser.me/portraits/thumb/men/22.jpg"
      },
        {
            "no_etud": 6705428,
            "email": "maxineestrada@enquility.com",
            "phone": "O680159302",
            "name": "Stevenson Snider",
            "promo": "2014-2015",
            "formation": "LP Développement Web et Web Mobile",
            "facebook": "",
            "twitter": "",
            "linkedin": "",
            "googleplus": "",
            "picture": "http://api.randomuser.me/portraits/thumb/women/18.jpg"
      },
        {
            "no_etud": 8695736,
            "email": "stevensonsnider@enquility.com",
            "phone": "O626896237",
            "name": "Wright Reeves",
            "promo": "2014-2015",
            "formation": "LP Développement Web et Web Mobile",
            "facebook": "",
            "twitter": "",
            "linkedin": "",
            "googleplus": "",
            "picture": "http://api.randomuser.me/portraits/thumb/women/41.jpg"
      },
        {
            "no_etud": 4971416,
            "email": "wrightreeves@enquility.com",
            "phone": "O682457840",
            "name": "Estela Stewart",
            "promo": "2014-2015",
            "formation": "LP Développement Web et Web Mobile",
            "facebook": "",
            "twitter": "",
            "linkedin": "",
            "googleplus": "",
            "picture": "http://api.randomuser.me/portraits/thumb/men/43.jpg"
      },
        {
            "no_etud": 3558991,
            "email": "estelastewart@enquility.com",
            "phone": "O640304832",
            "name": "Pate Howard",
            "promo": "2014-2015",
            "formation": "LP Développement Web et Web Mobile",
            "facebook": "",
            "twitter": "",
            "linkedin": "",
            "googleplus": "",
            "picture": "http://api.randomuser.me/portraits/thumb/women/46.jpg"
      },
        {
            "no_etud": 2502120,
            "email": "patehoward@enquility.com",
            "phone": "O655264600",
            "name": "Sherman Estes",
            "promo": "2014-2015",
            "formation": "LP Développement Web et Web Mobile",
            "facebook": "",
            "twitter": "",
            "linkedin": "",
            "googleplus": "",
            "picture": "http://api.randomuser.me/portraits/thumb/men/33.jpg"
      }
    ];

    this.getStudents = function () {
        return this.students;
    };

    this.getStudent = function (id) {
        var student = {};
        angular.forEach(this.students, function (value, key) {
            if (value.no_etud    == id) {
                student = value;
            }
        });
        return student;
    };
});