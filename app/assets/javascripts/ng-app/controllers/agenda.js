<<<<<<< HEAD
app.controller('AgendaCtrl', function ($scope, Student) {
=======
'use strict';
app.controller('AgendaCtrl', function ($scope) {
>>>>>>> feature/amilti

    Student.isAdmin(function (data) {
        $scope.isAdmin = data.is_admin;
    });

    // $scope.eventSources = [];

    /* config object */
    $scope.uiConfig = {
        calendar:{
            editable: true,
            header:{
                left: '',
                center :'title',
                right: 'prev,next'
            },
            firstDay:1,
            lang:"fr",
            eventResize: $scope.alertOnResize
        }
    };
    $scope.events = [
      {title: 'All Day Event', start: new Date(), end: new Date()},
    ];
     $scope.eventSources = [$scope.events];
});

angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi"
    ],
    "MONTH": [
      "Janvier",
      "F\u00e9vrier",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Ao\u00fbt",
      "Septembre",
      "Octobre",
      "Novembre",
      "D\u00e9cembre"
    ],
    "SHORTDAY": [
      "Dim.",
      "Lun.",
      "Mar.",
      "Mer.",
      "Jeu.",
      "Ven.",
      "Sam."
    ],
    "SHORTMONTH": [
      "Janv.",
      "F\u00e9vr.",
      "Mars",
      "Avr.",
      "Mai",
      "Juin",
      "Juil.",
      "Ao\u00fbt",
      "Sept.",
      "Oct.",
      "Nov.",
      "D\u00e9c."
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "dd/MM/y HH:mm",
    "shortDate": "dd/MM/y",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u20ac",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": "\u00a0",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "fr",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  if (i == 0 || i == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);

