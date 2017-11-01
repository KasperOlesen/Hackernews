
'use strict';

angular.module('myApp.newStoryView', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/newStoryView', {
                    templateUrl: 'app/newStoryView/newStoryView.html',
                    controller: 'newStoryViewCtrl'
                });
            }])

        .controller("newStoryViewCtrl", function ($scope, $rootScope, $http) {
          $scope.story = {}
          $scope.save  = function () {
            $scope.story.author = $rootScope.user.username;
            console.log($scope.story);
          };
        });
