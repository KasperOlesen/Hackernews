
'use strict';

angular.module('myApp.view7', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view7', {
                    templateUrl: 'app/view7/view7.html',
                    controller: 'View7Ctrl',
                    controllerAs: 'ctrl'
                });
            }])

        .controller("View7Ctrl", ["$scope", "dataFactory", function ($scope, dataFactory) {

                var post = dataFactory.getPostDetails();
                $scope.post = post.data;
                $scope.comments = post.data['comments'];

                $scope.upvotePost = function (post) {
                    dataFactory.upvotePost(post);
                };
                $scope.downvotePost = function (post) {
                    dataFactory.downvotePost(post);
                };
                $scope.upvoteComment = function (comment) {
                    dataFactory.upvoteComment(comment);
                };
                $scope.downvoteComment = function (comment) {
                    dataFactory.downvoteComment(comment);
                };

                $scope.newComment = function () {
                    var newComment = {};
                    newPost.username = "mockUser1";
                    newPost.pwd_hash = "mockPwdHash";
                    newPost.post_parent = "";
                    newPost.post_karma = 0;
                };

            }]);