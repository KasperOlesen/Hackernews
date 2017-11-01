'use strict';
/* Place your global Factory-service in this file */

angular.module('myApp.factories', [])
        .factory('dataFactory', ['$http', '$window', function ($http, $window) {

                var urlBasePost = 'api/post';
                var dataFactory = {};
                var postInfo = [];
                var postInfoDetails = [];
//                dataFactory.addItem = function (item) {
//                    basePrice = (item.totalPrice / item.numberOfSeats);
//                    flightInfo.push(item);
//                    $window.location.href = '#/view6';
//                };




                //Dummy objects with test data

                var post1 = {"username": "Tove",
                    "post_type": "story",
                    "pwd_hash": "ublamgata",
                    "post_title": "This is a title for test post 1",
                    "post_url": "post1LINK",
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
                    "post_title": "This is a title for test post 2",
                    "post_url": "post222LINK",
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
                    "post_title": "This is a title for test post 3",
                    "post_url": "post3LINK",
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

                dataFactory.getAllPosts = function () {
//                    postInfo.push($http.get(urlBasePost));
                    return postInfo;
                };
                dataFactory.setPostDetails = function (post) {
                    postInfoDetails.data = post;
                };

                dataFactory.getPostDetails = function () {
                    return postInfoDetails;
                };

                dataFactory.addNewComment = function (comment) {                 
                    postInfo.forEach(function (postInfo) {
                        if (comment.post_parent === postInfo.hanesst_id) {
                            postInfo.comments.push(comment);
                        };
                    });
//                    return $http.post(urlBasePost + "/" + comment);
                };

                dataFactory.addPost = function (post) {
                    postInfo.push(post);
                    return $http.post(urlBasePost + "/" + post);
                };

                dataFactory.upvotePost = function (post) {
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
                dataFactory.downvotePost = function (post) {
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

                dataFactory.upvoteComment = function (comment) {
                    if (comment.upvoted) {
                        comment.comment_karma--;
                        comment.upvoted = false;
                    } else if (comment.downvoted) {
                        comment.downvoted = false;
                        comment.comment_karma = comment.comment_karma + 2;
                        comment.upvoted = true;
                    } else {
                        comment.comment_karma++;
                        comment.upvoted = true;
                    }
                    return comment;
                };
                dataFactory.downvoteComment = function (comment) {
                    if (comment.downvoted) {
                        comment.comment_karma++;
                        comment.downvoted = false;
                    } else if (comment.upvoted) {
                        comment.upvoted = false;
                        comment.comment_karma = comment.comment_karma - 2;
                        comment.downvoted = true;
                    } else {
                        comment.comment_karma--;
                        comment.downvoted = true;
                    }
                    return comment;
                };

//                dataFactory.newHanesstId = function () {
//                    var hanesst_id = Math.max.apply(Math, postInfo.map(function (o) {
//                        return o.hanesst_id;
//                    }));
//                    hanesst_id++;
//                    return hanesst_id;
//                };

                dataFactory.getDateTime = function () {
                    var dt = new Date();
                    var utcDate = dt.toUTCString();
                    return utcDate;
                };


                return dataFactory;
            }]);

        