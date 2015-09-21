/* jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: nofunc */

/* globals angular, console */

(function () {
    "use strict";

    angular
        .module("sp-app-client.controllers")
        .controller("WeekFindAllSchedulesController", WeekFindAllSchedulesController);

    WeekFindAllSchedulesController.$inject = ["UserFactory"];

    function WeekFindAllSchedulesController(UserFactory) {
        var vm = this;
        vm.schedules = [];
        vm.days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
        vm.hours = ["8","9","11",];

        activate();

        function activate() {
            return findAllUsers().then(function (users) {
                console.log('--> Activate findAllUsers');
            });
        }

        function findAllUsers() {
            return UserFactory.findAllUsers().then(function (users) {
                return users;
            }, function (err) {
                console.log(err);
            });
        }
    }

})();
