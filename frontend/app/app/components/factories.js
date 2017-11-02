'use strict';
/* Place your global Factory-service in this file */

angular.module('myApp.factories', [])
        .factory('dataFactory', ['$http', '$window', function ($http, $window) {

                var urlBasePost = 'api/post';
                var dataFactory = {};
                var postInfo = [];
                var postInfoDetails = [];


                //Mock objects with test data

                var post1 = {"username": "Tove",
                    "post_type": "story",
                    "pwd_hash": "ublamgata",
                    "post_title": "TestPost 1",
                    "post_url": "www.google.com",
                    "post_parent": "",
                    "hanesst_id": 325243,
                    "post_text": "Posttext of post 1",
                    "post_karma": 635,
                    "comments": [{
                            "username": "Unidan",
                            "hanesst_id": 4352,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext1",
                            "post_karma": 2},
                        {
                            "username": "Unidan2",
                            "hanesst_id": 758,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext2",
                            "post_karma": 4},
                        {
                            "username": "Unidan3",
                            "hanesst_id": 987,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext3",
                            "post_karma": 3}
                    ]};
                var post2 = {"username": "Karsten",
                    "post_type": "story",
                    "pwd_hash": "u35ytgata",
                    "post_title": "Test Post 22",
                    "post_url": "www.reddit.com",
                    "post_parent": "",
                    "hanesst_id": 31678,
                    "post_text": "Posttext of post 2",
                    "post_karma": 3625,
                    "comments": [{
                            "username": "Unidani",
                            "hanesst_id": 7618,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext1",
                            "post_karma": 9},
                        {
                            "username": "UnidanNER",
                            "hanesst_id": 11,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext2",
                            "post_karma": 10},
                    ]};


                var post3 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 243,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": [{
                            "username": "Unidany",
                            "hanesst_id": 5,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext1",
                            "post_karma": 2},
                        {
                            "username": "Unidanaa",
                            "hanesst_id": 76894,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext2",
                            "post_karma": 85},
                        {
                            "username": "Unidan3a",
                            "hanesst_id": 345,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext3",
                            "post_karma": 34}
                    ]};

                postInfo.push(post1, post2, post3);

                //GET
                //path (api/getStories)
                //returns list with stories and a nested list 
                //of comments for each story
                dataFactory.getAllPosts = function () {
//                    postInfo.push($http.get(urlBasePost));
                    return postInfo;
                };
                
                //Setting post-details when navigating story-view
                dataFactory.setPostDetails = function (post) {
                    postInfoDetails.data = post;
                };

                //Getting post-details when navigating story-view
                dataFactory.getPostDetails = function () {
                    return postInfoDetails;
                };

                //Add new comment to a story
                dataFactory.addNewComment = function (comment) {                 
                    postInfo.forEach(function (postInfo) {
                        if (comment.post_parent === postInfo.hanesst_id) {
                            postInfo.comments.push(comment);
                        };
                    });
//                    return $http.post(urlBasePost + "/" + comment);
                };

                //Add new story
                dataFactory.addPost = function (post) {
                    postInfo.push(post);
                    return $http.post(urlBasePost + "/" + post);
                };

                //Voting system
                dataFactory.upvote = function (post) {
                    if (post.upvoted) {
                        post.post_karma--;
                        post.upvoted = false;
                    } else if (post.downvoted) {
                        post.downvoted = false;
                        post.post_karma = post.post_karma + 2;
                        post.upvoted = true;
                    } else {
                        post.post_karma++;
                        post.upvoted = true;
                    }
                    return post;
                };
                dataFactory.downvote = function (post) {
                    if (post.downvoted) {
                        post.post_karma++;
                        post.downvoted = false;
                    } else if (post.upvoted) {
                        post.post_karma = post.post_karma - 2;
                        post.upvoted = false;
                        post.downvoted = true;
                    } else {
                        post.post_karma--;
                        post.downvoted = true;
                    }
                    return post;
                };

//                dataFactory.newHanesstId = function () {
//                    var hanesst_id = Math.max.apply(Math, postInfo.map(function (o) {
//                        return o.hanesst_id;
//                    }));
//                    hanesst_id++;
//                    return hanesst_id;
//                };

                //Getting current date/time GMT
                dataFactory.getDateTime = function () {
                    var dt = new Date();
                    var utcDate = dt.toUTCString();
                    return utcDate;
                };


                return dataFactory;
            }]);

        