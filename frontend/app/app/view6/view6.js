<<<<<<< HEAD

=======
>>>>>>> 42833106c4b8d9a97ad4d9e439ef732ccff3ed9f
'use strict';

angular.module('myApp.view6', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view6', {
                    templateUrl: 'app/view6/view6.html',
<<<<<<< HEAD
                    controller: 'View6Ctrl',
                    controllerAs: 'ctrl'
                });
            }])

        .controller("View6Ctrl", ["$scope", "dataFactory", function ($scope, dataFactory) {

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
=======
                    controller: 'View6Ctrl'
                });
            }])

        .controller("View6Ctrl", function ($scope, $http) {
          $scope.story = {}
          $scope.save  = function () {
            $scope.story.author = "Emil"
          };
        });
>>>>>>> 42833106c4b8d9a97ad4d9e439ef732ccff3ed9f
