
'use strict';

angular.module('myApp.loginView', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/loginView', {
                    templateUrl: 'app/loginView/loginView.html'
                });
            }])

        .controller("loginViewCtrl", ['$rootScope', '$scope', '$http', '$window', '$location', function ($rootScope, $scope, $http, $window, $location) {

          $scope.username = "hej";
          $scope.isAuthenticated = false;
          $scope.isAdmin = false;
          $scope.isUser = false;
          $scope.message = '';
          $scope.error = null;

          //Other controller emits the logOutEvent to force a logout
          $scope.$on('logOutEvent', function (event, args) {
              $scope.error = "Your session timed out. Please login again";
              $scope.logout();
          });

          $scope.isActive = function (viewLocation) {
              return viewLocation === $location.path();
          };

          $scope.login = function () {
                      if ($scope.user.username === "admin" && $scope.user.password === "password") {
                        console.log($scope.user);
                        $window.sessionStorage.currentUser = JSON.stringify($scope.user);
                        console.log($window.sessionStorage.currentUser);
                        $scope.isAuthenticated = true;
                        $scope.username = $scope.user.username;
                        $scope.isAdmin = true;
                        $scope.error = null;
                        $location.path("#/view1");
                      };

          };

          $rootScope.logout = function () {
              delete $window.sessionStorage.currentUser;
              $scope.isAuthenticated = false;
              $scope.isAdmin = false;
              $scope.isUser = false;
              delete $window.sessionStorage.token;
              $location.path("#/view1");
          };

          //This sets the login data from session store if user pressed F5 (You are still logged in)
          var init = function () {
              //var token = $window.sessionStorage.token;
              var token = $window.sessionStorage.currentUser
              console.log(token);
              if (token) {
                var profile = JSON.parse(token);
                $scope.isAuthenticated = true;
                $scope.username = profile.username;
                $scope.isAdmin = true;
                $scope.error = null;
              }
          };
            }]);
