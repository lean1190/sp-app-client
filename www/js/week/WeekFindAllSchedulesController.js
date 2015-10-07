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
        vm.schedules = {};
        vm.hours = [];

        activate();

        function activate() {
            return UserFactory.findAllUsersSchedule().then(function (schedules) {
                vm.schedules = schedules;
                for (var day in schedules) {
                    for(var hour in schedules[day]) {
                        vm.hours.push(hour);
                    }
                    // Only 1 loop
                    break;
                }
            },
            function (err) {
                console.log(err);
            });
        }
    }

})();
