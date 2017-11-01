
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
                $scope.commentList = post.comments;

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

            }]);