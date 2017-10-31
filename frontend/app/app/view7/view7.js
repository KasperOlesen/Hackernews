
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

//                 $scope.post = dataFactory.getPost(post_id);



                $scope.commentList = dataFactory.getAllComments();
                $scope.postInfo = {"username": "Tove",
                    "post_type": "story",
                    "pwd_hash": "ublamgata",
                    "post_title": "This is a title for test post 1",
                    "post_url": "post1LINK",
                    "post_parent": -2,
                    "hanesst_id": 325243,
                    "post_text": "Posttext of post 1"};




            }]);