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
 
           
                $scope.posts = dataFactory.getStories();

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




            }]);


//
//.controller('View1Ctrl', ["InfoFactory","InfoService",function(InfoFactory,InfoService) {
//
//
//
//
//}]);
