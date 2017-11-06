'use strict';

/* Place your Global Filters in this file */

angular.module('myApp.filters', []).
  filter('ifEmpty', function() {
    return function(input, defaultValue) {
        if (angular.isUndefined(input) || input === null || input === '') {
            return defaultValue;
        }

        return input;
    }
  });
