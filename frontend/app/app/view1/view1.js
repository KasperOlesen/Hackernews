'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'app/view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs : 'ctrl'
  });
}])

  .controller('View1Ctrl', function ($http, $scope) {
//          $http({
//            method: 'GET',
//            url: 'api/stories'
//          }).then(function successCallback(res) {
//            $scope.data = res.data.message;
//          }, function errorCallback(res) {
//            $scope.error = res.status + ": "+ res.data.statusText;
//          });
        });


//
//.controller('View1Ctrl', ["InfoFactory","InfoService",function(InfoFactory,InfoService) {
//        
//        
//        
//        
//}]);