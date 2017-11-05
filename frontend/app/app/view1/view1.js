'use strict';

angular.module('myApp.view1', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view1', {
                    templateUrl: 'app/view1/view1.html',
                    controller: 'View1Ctrl',
                    controllerAs: 'ctrl'
                });
            }])

        .controller('View1Ctrl', ["$scope", "dataFactory", "postService", "$window", "localStorageService", function ($scope, dataFactory, postService, $window, localStorageService) {

//          $http({
//            method: 'GET',
//            url: 'api/post'
//          }).then(function successCallback(res) {
//            $scope.post = res.data.message;
//          }, function errorCallback(res) {
//            $scope.error = res.status + ": "+ res.data.statusText;
//          });


//        $scope.getCommentcount = function ()

                var posts = dataFactory.getAllStories();

                $scope.posts = posts;

                if (localStorageService.isSupported) {
                    localStorageService.set("posts", posts);
                };

                $scope.viewPost = function (post) {
                    postService.setPostDetails(post);
                    //localStorage
                    if (localStorageService.isSupported) {
                        localStorageService.set("postDetails", post);
                    }
                    ;
                    $window.location.href = '#/view7';
                };

                $scope.viewAuthor = function (post) {
                    dataFactory.setAuthorDetails(post);
                    $window.location.href = '#/view3';
                };

                $scope.upvote = function (post) {
                    dataFactory.upvote(post);
                };
                $scope.downvote = function (post) {
                    dataFactory.downvote(post);
                };


                //localStorage
                if (localStorageService.isSupported) {
                    localStorageService.set("postDetails", dataFactory.getAllStories());
                }
                ;

            }]);


//
//.controller('View1Ctrl', ["InfoFactory","InfoService",function(InfoFactory,InfoService) {
//
//
//
//
//}]);
