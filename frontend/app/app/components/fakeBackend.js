angular.module('myApp.fakeBackend', [])

      .factory('FakeFactory', ['$http', '$window', function ($http, $window) {
        var service = {};

        service.getProfile = getProfile;

        return service;

        function getProfile() {
          var person =
          {
            "id": 3546,
            "name": "Lars Larsen",
            "karma": 25,
            "email": "larsen@gmail.com",
            "password" : "cwd99ggt"
          };
          return person;
        }
      }]);
