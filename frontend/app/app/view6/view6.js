
'use strict';

angular.module('myApp.view6', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view6', {
                    templateUrl: 'app/view6/view6.html',
                    controller: 'View6Ctrl',
                    controllerAs: 'ctrl'
                });
            }])

        .controller("View6Ctrl", ["$scope", "dataFactory", "$window", function ($scope, dataFactory, $window) {

            var newPost = {};
            newPost.username = "mockUser1";
            newPost.post_type = "story";
            newPost.pwd_hash = "mockPwdHash";
            newPost.post_parent = "";
            newPost.post_karma = 0;

            $scope.submitPost = function () {
                newPost.post_title = $scope.post_title;
                newPost.post_url = $scope.post_url;
                newPost.post_text = $scope.post_text;
                newPost.hanesst_id = 0;
                newPost.timeStamp = dataFactory.getDateTime();
                dataFactory.addPost(newPost);
                $window.location.href = '#/view1';
            };
        }]);

