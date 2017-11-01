
'use strict';

angular.module('myApp.view7', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view7', {
                    templateUrl: 'app/view7/view7.html',
                    controller: 'View7Ctrl',
                    controllerAs: 'ctrl'
                });
            }])

        .controller("View7Ctrl", ["$scope", "dataFactory", "$rootScope", function ($scope, dataFactory, $rootScope) {

                var post = dataFactory.getPostDetails();
                $scope.post = post.data;
                $scope.comments = post.data['comments'];

                $scope.upvote = function (post) {
                    dataFactory.upvote(post);
                };
                $scope.downvote = function (post) {
                    dataFactory.downvote(post);
                };

                $scope.submitComment = function () {

                    var newComment = {};
                    newComment.username = $rootScope.user.username;
                    newComment.post_type = "comment";
                    newComment.pwd_hash = "mockPwdHash";
                    newComment.post_parent = post.data['hanesst_id'];
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