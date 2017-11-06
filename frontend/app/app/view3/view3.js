'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'app/view3/view3.html',
    controller: 'View3Ctrl',
    controllerAs : 'ctrl'
  });
}])

  .controller('View3Ctrl', function ($http, $scope, dataFactory) {

            var author = dataFactory.getAuthorDetails();

            $scope.author = author['username'];
            $scope.karma = author['karma'];
            $scope.authorPosts = author.posts;
            $scope.authorComments = author.comments;
            
          });



