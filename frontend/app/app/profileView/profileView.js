'use strict';

angular.module('myApp.profileView', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/profileView', {
              templateUrl: 'app/profileView/profileView.html',
              controller: 'profileViewCtrl'
            });
          }])

        .controller('profileViewCtrl', function ($http, $scope, FakeFactory) {
          $scope.person = {};
          $scope.pwd1;
          $scope.pwd2;

          initController();

          function initController() {
              test();
              $scope.person = FakeFactory.getProfile();

          }


          $scope.submit = function() {
            console.log($scope.pwd1)
            console.log($scope.pwd2)
            if ($scope.pwd1 == $scope.pwd2) {
              console.log("de er ens")
            }
          };

          function resetPW() {
              $scope.mailCorrect = "";
              $scope.mailError = "";
              //var email = {'email': $scope.rEmail};
              var email = $scope.rEmail;
              console.log(email);
              var res = $http.get($rootScope.cfg.url + ":" + $rootScope.cfg.port + '/resetpasscode/' + email);
              res.success(function (data, status, headers, config) {
                  $scope.mailCorrect = "Email sendt"
              });
              res.error(function (data, status, headers, config) {
                  $scope.mailError = "Emailen findes ikke"
              });
          }

          function test() {
              console.log("Hvaad fanden");
          }
});
