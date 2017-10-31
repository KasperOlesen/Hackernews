
'use strict';

angular.module('myApp.view6', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view6', {
                    templateUrl: 'app/view6/view6.html',
                    controller: 'View6Ctrl',
                    controllerAs: 'ctrl'
                });
            }])

        .controller("View6Ctrl", function ($scope, $http) {
          $scope.story = {}
          $scope.save  = function () {
            $scope.story.author = "Emil"
          };
        });

