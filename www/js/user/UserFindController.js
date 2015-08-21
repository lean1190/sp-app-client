/* jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: nofunc */

/* globals angular, console */

(function () {
    "use strict";

    angular
        .module("sp-app-client.controllers")
        .controller("UserFindByIdController", UserFindByIdController);

    UserFindByIdController.$inject = ["UserFactory", "$stateParams"];

    function UserFindByIdController(UserFactory, $stateParams) {
        var vm = this;
        vm.user = {};

        activate($stateParams.id);

        function activate(user) {
            return findUserById(user).then(function () {
                console.log('--> Activate findUserById');
            });
        }

        function findUserById(user) {
            return UserFactory.findUserById(user).then(function (user) {
                console.log(":: GET USER: ", user);
                vm.user = user;
            }, function (err) {
                console.log(":: PROMISE REJECTED");
                console.log(err);
            });
        }
    }

})();
