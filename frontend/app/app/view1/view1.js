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

                $scope.viewPost = function (hanesst_id) {
                    dataFactory.setComments(hanesst_id);
                    $window.location.href = '#/view7';

                };

            }]);


//
//.controller('View1Ctrl', ["InfoFactory","InfoService",function(InfoFactory,InfoService) {
//        
//        
//        
//        
//}]);


