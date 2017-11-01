'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'myApp.security',
  'myApp.view1',
  'myApp.profileView',
  'myApp.view3',
  'myApp.loginView',
  'myApp.view5',
  'myApp.newStoryView',
  'myApp.view7',
  'myApp.filters',
  'myApp.directives',
  'myApp.factories',
  'myApp.services',
  'myApp.fakeBackend'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
config(function ($httpProvider) {
   $httpProvider.interceptors.push('authInterceptor');
}).
run(["$rootScope", "$http", "$location", function($rootScope, $http, $location, $window) {

        /*$http.get('config.json')
            .then(function (res) {
                server = res.data.url + ":" + res.data.port + "/";
            });*/

        $rootScope.isAuthenticated = false;
        $rootScope.username = "";
        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function () {
            var publicPages = ['/view1', '/view3','/loginView','/view5','/view7'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && $rootScope.isAuthenticated === false) {
                $location.path('/loginView');
            }
        });
    }]);
