'use strict';

angular.module('myApp.view1', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view1', {
                    templateUrl: 'app/view1/view1.html',
                    controller: 'View1Ctrl',
                    controllerAs: 'ctrl'
                });
            }])

        .controller('View1Ctrl', ["$scope", "dataFactory", "$window", function ($scope, dataFactory, $window) {
                $scope.dataFactory = dataFactory;
//          $http({
//            method: 'GET',
//            url: 'api/post'
//          }).then(function successCallback(res) {
//            $scope.post = res.data.message;
//          }, function errorCallback(res) {
//            $scope.error = res.status + ": "+ res.data.statusText;
//          });


//        $scope.getCommentcount = function ()

                $scope.posts = dataFactory.getAllPosts();

                $scope.viewPost = function (post) {
                    dataFactory.setPostDetails(post);
                    $window.location.href = '#/view7';

                };

                $scope.upvotePost = function (post) {
                    console.log("upvoting");
                    dataFactory.upvotePost(post);
                };
                $scope.downvotePost = function (post) {
                    console.log("downvoting");
                    dataFactory.downvotePost(post);
                };

            }]);


//
//.controller('View1Ctrl', ["InfoFactory","InfoService",function(InfoFactory,InfoService) {
//        
//        
//        
//        
//}]);


