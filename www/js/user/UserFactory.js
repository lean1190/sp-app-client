/* jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: nofunc */

/* globals angular */

(function () {
    "use strict";

    angular
        .module("sp-app-client.factories")
        .factory("UserFactory", UserFactory);

    UserFactory.$inject = ["$resource", "$http", "apiEndpoint"];

    function UserFactory($resource, $http, apiEndpoint) {
        // --> PRODUCTION
        //var urlBase = "https://warm-ocean-7615.herokuapp.com",
        var urlBase = "http://localhost:3000",
            usersEndpoint = urlBase + "/users/:id",
            schedulesEndpoint = urlBase + "/users/:id/schedule";

        var service = {
            getUsersResource: getUsersResource,
            findAllUsers: findAllUsers,
            findUserById: findUserById,
            findAllUsersSchedule: findAllUsersSchedule
        };

        return service;

        function getUsersResource() {
            return $resource(usersEndpoint, {id: "@_id"});
        }

        function getSchedulesResource() {
            return $resource(schedulesEndpoint, {id: "@_id"});
        }

        function findAllUsers() {
            return getUsersResource().query().$promise;
        }

        function findUserById(userId) {
            return getUsersResource().get({id: userId}).$promise;
        }

        function findAllUsersSchedule() {
            return $http.get(urlBase + "/users/schedule/all").then(function(result) {
                return result.data;
            });
        }
    }

})();
