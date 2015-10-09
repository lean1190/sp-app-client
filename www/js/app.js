/* jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: nofunc */

/* globals window, angular, cordova, StatusBar */

angular
    .module("sp-app-client", ["ionic", "ngResource", "angularSpinners", "sp-app-client.controllers", "sp-app-client.factories"])
    .run(run)
    .config(config);

// Declares the controllers module
angular.module("sp-app-client.controllers", []);
// Declares the factories module
angular.module("sp-app-client.factories", []);

function run($ionicPlatform) {
    "use strict";

    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
}

function config($stateProvider, $urlRouterProvider) {
    "use strict";

    $stateProvider

    .state("app", {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "AppCtrl"
    })

    .state("app.users", {
        url: "/users",
        views: {
            "menuContent": {
                templateUrl: "templates/users.html",
                controller: "UserFindAllController as vm"
            }
        }
    })

    .state("app.user", {
        url: "/users/:id",
        views: {
            "menuContent": {
                templateUrl: "templates/user.html",
                controller: "UserFindByIdController as vm"
            }
        }
    })

    .state("app.week", {
        url: "/week",
        views: {
            "menuContent": {
                templateUrl: "templates/week.html",
                controller: "WeekFindAllSchedulesController as vm"
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/app/users");
}
