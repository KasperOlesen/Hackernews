'use strict';

/* Place your Global Services in this File */

// Demonstrate how to register services
angular.module('myApp.services', [])
        .service('postService', function () {

            
            var postInfoDetails = [];
            


            //Setting post-details when navigating story-view
            var setPostDetails = function (post) {
                postInfoDetails = post;
            };
            //Getting post-details when navigating story-view
            var getPostDetails = function () {
                return postInfoDetails;
            };

            return {
                setPostDetails: setPostDetails,
                getPostDetails: getPostDetails
            };

        });