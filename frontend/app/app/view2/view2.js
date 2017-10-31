'use strict';

angular.module('myApp.view2', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view2', {
              templateUrl: 'app/view2/view2.html',
              controller: 'View2Ctrl'
            });
          }])

        .controller('View2Ctrl', function ($http, $scope, FakeFactory) {
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
