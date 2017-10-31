
'use strict';

angular.module('myApp.view5', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view5', {
                    templateUrl: 'app/view5/view5.html'
                });
            }])

        .controller("View5Ctrl", ['$scope', '$http', function ($scope, $http) {

                $scope.addUserAsJSON = function () {
                    // Writing it to the server
                    //		

                    var res = $http.post('api/user/registration', $scope.newuser);
                    res.success(function (data, status, headers, config) {
                        $scope.message = data;
                        alert("You are registered. Go to the Login Section to log in.");
                        $scope.newuser.username = '';
                        $scope.newuser.password = '';
                    });
                    res.error(function (data, status, headers, config) {
                        alert("failure message: " + JSON.stringify({data: data}));
                    });
                };
            }]);