
'use strict';

angular.module('myApp.view7', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view7', {
                    templateUrl: 'app/view7/view7.html',
                    controller: 'View7Ctrl',
                    controllerAs: 'ctrl'
                });
            }])

        .controller("View7Ctrl", ["$scope", "dataFactory", "postService", "$rootScope", "$location", "$window", "localStorageService", function ($scope, dataFactory, postService, $rootScope, $location, $window, localStorageService) {

                var post = postService.getPostDetails();

                $scope.post = post;
                $scope.comments = post.comments;

                if (post.length === 0 && localStorageService.isSupported) {
                    $rootScope.error = "Error connecting to server. Loading cached data...";
                    post = localStorageService.get("postDetails");
                    $scope.post = post;
                    $scope.comments = post.comments;

                }


                $scope.upvote = function (post) {
                    dataFactory.upvote(post);
                };
                $scope.downvote = function (post) {
                    dataFactory.downvote(post);
                };

                $scope.viewAuthor = function (post) {
                    dataFactory.setAuthorDetails(post);
                    $window.location.href = '#/view3';
                };

                $scope.submitComment = function () {

                    //random mock hanesst_id
                    var randomHanesst = Math.floor((Math.random() * 10000000) + 1);


                    var newComment = {};
                    newComment.username = $rootScope.user.username;
                    newComment.post_type = "comment";
                    newComment.pwd_hash = $rootScope.user.password;
                    newComment.post_parent = $scope.post.hanesst_id;
                    newComment.post_karma = 0;
                    newComment.post_title = "";
                    newComment.post_url = "";
                    newComment.post_text = $scope.post_text;
                    newComment.hanesst_id = randomHanesst;
                    newComment.timeStamp = dataFactory.getDateTime();
                    dataFactory.addPost(newComment);
                    $scope.post_text = "";
                };

            }]);
