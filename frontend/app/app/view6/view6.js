
'use strict';

angular.module('myApp.view6', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view6', {
                    templateUrl: 'app/view6/view6.html',
                    controller: 'View6Ctrl',
                    controllerAs: 'ctrl'
                });
            }])

        .controller("View6Ctrl", ["$scope", "dataFactory", "$window", "$rootScope", function ($scope, dataFactory, $window, $rootScope) {


                $scope.submitPost = function () {

                    //random mock hanesst_id
                    var randomHanesst = Math.floor((Math.random() * 10000000) + 1);

                    
                    var newPost = {};
                    newPost.username = $rootScope.user.username;
                    newPost.post_type = "story";
                    newPost.pwd_hash = $rootScope.user.password;
                    newPost.post_parent = "";
                    newPost.post_karma = 0;
                    newPost.post_title = $scope.post_title;
                    newPost.post_url = $scope.post_url;
                    newPost.post_text = $scope.post_text;
                    newPost.hanesst_id = randomHanesst;
                    newPost.timeStamp = dataFactory.getDateTime();
                    newPost.comments = [];
                    dataFactory.addPost(newPost);
                    $window.location.href = '#/view1';
                };
            }]);

