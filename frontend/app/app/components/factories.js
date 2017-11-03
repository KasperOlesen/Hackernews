'use strict';
/* Place your global Factory-service in this file */

angular.module('myApp.factories', [])
        .factory('dataFactory', ['$http', '$window','localStorageService', function ($http, $window, localStorageService) {

                var urlBasePost = 'api/post';
                var dataFactory = {};
                var postInfo = [];
                var postInfoDetails = [];
                var authorInfoDetails = {};


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
                            "post_text": "commenttext2 testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtextx",
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
                            "post_karma": 10}
                    ]};
                var post3 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 243,
                    "post_text": "Posttext of testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext  testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext tetesttext te te post 3",
                    "post_karma": 45629,
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
                            "post_text": "commenttext2 testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttex testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttex",
                            "post_karma": 1},
                        {
                            "username": "Unidan3a",
                            "hanesst_id": 701,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext3 testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttex ",
                            "post_karma": 1},
                        {
                            "username": "Unidan3a",
                            "hanesst_id": 702,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext3 testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext tetesttexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttex ",
                            "post_karma": 1},
                        {
                            "username": "Unidan3a",
                            "hanesst_id": 703,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext3 testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttex ",
                            "post_karma": 1},
                        {
                            "username": "Unidan3a",
                            "hanesst_id": 704,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext3  testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext te testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttex ",
                            "post_karma": 1},
                        {
                            "username": "Unidan3a",
                            "hanesst_id": 705,
                            "post_title": "",
                            "post_url": "",
                            "post_text": "commenttext3 testtexttesttexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttext testtext testtexttesttex ",
                            "post_karma": 1}
                    ]};
                var post4 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 101,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post5 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 102,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post6 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "WMWMWMw WM MW MwW MWMWMWM wM WMWMWMWMWM WMWM WMWMWMw WM MW MwW MWMWMWM wM WMWMWMWMWM WMWM WMWMWMw WM MW MwW MWMWMWM wM WMWMWMWMWM WMWM WMWMWMw WM MW MwW MWMWMWM wM WMWMWMWMWM WMWM",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 103,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post7 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 104,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post8 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 105,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post9 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 106,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post10 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 107,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post11 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 108,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post12 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 109,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post13 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 110,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post14 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 111,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                var post15 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 3",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 114,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623,
                    "comments": []
                };
                
                
                postInfo.push(post1, post2, post3,
                        post4, post5, post6,
                        post7, post8, post9,
                        post10, post11, post12,
                        post13, post14, post15);

                //GET
                //path (api/getStories)
                //returns list with stories and a nested list
                //of comments for each story
                dataFactory.getAllPosts = function () {
//                    postInfo.push($http.get(urlBasePost));
                    return postInfo;
                };


                //Setting author-details when navigating view3
                dataFactory.setAuthorDetails = function (author) {
                    authorInfoDetails = author;
                };

                //Getting author-details when navigating view3
                dataFactory.getAuthorDetails = function () {
                    return authorInfoDetails;
                };

                //Add new comment to a story
                dataFactory.addNewComment = function (comment) {
                    postInfo.forEach(function (postInfo) {
                        if (comment.post_parent === postInfo.hanesst_id) {
                            postInfo.comments.push(comment);
                            if (localStorageService.isSupported){
                                localStorageService.set("postDetails", postInfo);
                            };
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
