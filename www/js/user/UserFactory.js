/* jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: nofunc */

/* globals angular */

(function () {
    "use strict";

    angular
        .module("sp-app-client.factories")
        .factory("UserFactory", UserFactory);

    UserFactory.$inject = ["$resource"];

    function UserFactory($resource) {
        var urlBase = "http://localhost:3000",
            resourceEndpoint = urlBase + "/users/:id";

        var service = {
            getResource: getResource,
            findAllUsers: findAllUsers,
            findUserById: findUserById
        };

        return service;

        function getResource() {
            return $resource(resourceEndpoint, {id: "@_id"});
        }

        function findAllUsers() {
            return getResource().query().$promise;
        }

        function findUserById(userId) {
            var a = getResource().get(userId);
            console.log(":: lpm", a);
            return a.$promise;
        }
    }

})();
