
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

                if (postService.getPostDetails().length === 0 && localStorageService.isSupported) {
                    var localStorage = localStorageService.get("postDetails");
                    $scope.post = localStorage;
                    $scope.comments = localStorage.comments;

                }


                $scope.upvote = function (post) {
                    dataFactory.upvote(post);
                };
                $scope.downvote = function (post) {
                    dataFactory.downvote(post);
                };

                $scope.viewAuthor = function (comment) {
                    dataFactory.setAuthorDetails(comment);
                    $window.location.href = '#/view3';
                };

                $scope.submitComment = function () {

                    var newComment = {};
                    newComment.username = $rootScope.user.username;
                    newComment.post_type = "comment";
                    newComment.pwd_hash = "mockPwdHash";
                    newComment.post_parent = $scope.post.hanesst_id;
                    newComment.post_karma = 0;
                    newComment.post_title = "";
                    newComment.post_url = "";
                    newComment.post_text = $scope.post_text;
                    newComment.hanesst_id = 0;
                    newComment.timeStamp = dataFactory.getDateTime();
                    dataFactory.addNewComment(newComment);

                    $scope.post_text = "";
                };

            }]);
