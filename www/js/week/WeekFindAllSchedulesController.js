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
        // Arreglo de dias
        vm.schedules = {};
        vm.days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
        vm.hours = [8, 9, 11];

        for (var i = 0; i < vm.days.length; i++) {
            var day = vm.days[i];
            vm.schedules[day] = {};
            for (var j = 0; j < vm.hours.length; j++) {
                var hour = vm.hours[j];
                vm.schedules[day][hour] = [];
            }
        }

        activate();

        function activate() {
            return UserFactory.findAllUsers().then(function (users) {
                users.forEach(function (currentUser) {
                    for (var i = 0; i < currentUser.schedule.length; i++) {
                        var scheduleEntry = currentUser.schedule[i];
                        vm.schedules[scheduleEntry.day][scheduleEntry.startHour].push({
                            name: currentUser.name,
                            profilePhoto: currentUser.profilePhoto
                        });
                    }
                });
            },
            function (err) {
                console.log(err);
            });
        }
    }

})();
