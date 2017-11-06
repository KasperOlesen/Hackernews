'use strict';
/* Place your global Factory-service in this file */

angular.module('myApp.factories', [])
        .factory('dataFactory', ['$http', 'localStorageService', 'postService', '$rootScope', function ($http, localStorageService, postService, $rootScope) {


                var dataFactory = {};
                var storyInfo = [];
                var authorInfoDetails = [];


                //MOCK OBJECTS WITH TEST DATA
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
                    "post_title": "Test post 4",
                    "post_url": "www.arto.dk",
                    "post_parent": "",
                    "hanesst_id": 101,
                    "post_text": "Posttext of post 4",
                    "post_karma": 45623,
                    "comments": []
                };
                var post5= {"username": "Unidanaa",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "Test post 4",
                    "post_url": "www.UnidanIsAwesome.dk",
                    "post_parent": "",
                    "hanesst_id": 12345231,
                    "post_text": "Posttext of post 5",
                    "post_karma": 45623,
                    "comments": []
                };




                dataFactory.setStories = function (stories) {
                    if (stories === "error" && storyInfo.length === 0) {
                        storyInfo.push(post1, post2, post3,
                                post4, post5);
                    }
                    if (stories === "cache" && storyInfo.length === 0) {
                        storyInfo.push(localStorageService.get("posts"));
                    }
                    ;
                };

                //GET
                //PATH (api/getStories)
                //RETURNS LIST OF STORIES WITH
                //NESTED LIST OF COMMENTS IN EACH STORY
                dataFactory.getStories = function () {
                    $http({
                        method: 'GET',
                        url: '/api/stories'
                    }).then(function successCallback(response) {
                        dataFactory.setStories(response.data);
                        $rootScope.error = false;
                        if (localStorageService.isSupported) {
                            localStorageService.set("posts", response.data);
                        }
                    }, function errorCallback(response) {
                        if (localStorageService.get("posts").length > 0 && storyInfo.length !== 0) {
                            dataFactory.setStories("cache");
                            $rootScope.error = "Error: Can't connect to server - Loading cached data...";

                        } else {
                            dataFactory.setStories("error");
                            $rootScope.error = "Error: Can't connect to server or load cached data - Loading mocks as last option...";
                        }
                    });
                    return storyInfo;
                };

                //SETTING AUTHOR-DETAILS WHEN NAVIGATING TO view3
                dataFactory.setAuthorDetails = function (post) {
                    authorInfoDetails.username = post.username;
                    authorInfoDetails.karma = dataFactory.getKarma(post.username);
                    var postList = [];
                    var commentList = [];
                    storyInfo.forEach(function (storyInfo) {
                        if (storyInfo.username === post.username) {
                            postList.push(storyInfo);
                        }
                        storyInfo.comments.forEach(function (comment) {
                            if (comment.username === post.username) {
                                commentList.push(comment);
                            }
                        });
                    });
                    authorInfoDetails.posts = postList;
                    authorInfoDetails.comments = commentList;
                };

                //GETTING AUTHOR-DETAILS WHEN NAVIGATING TO view3
                dataFactory.getAuthorDetails = function () {
                    return authorInfoDetails;
                };

                //CALCULATING KARMA POINTS FOR STORIES AND COMMENTS
                dataFactory.getKarma = function (username) {
                    var karma = {};
                    karma.posts = 0;
                    karma.comments = 0;

                    storyInfo.forEach(function (storyInfo) {
                        if (storyInfo.username === username) {
                            karma.posts += storyInfo.post_karma;
                        }
                        storyInfo.comments.forEach(function (comment) {
                            if (comment.username === username) {
                                console.log(comment.post_karma);
                                karma.comments += comment.post_karma;
                            }
                        });

                    });
                    return karma;
                };


                //ADD NEW POST (story/comment)
                //POST
                //PATH (api/post)
                //POSTS TO BACKEND AND ALSO STORES IN LOCALSTORAGE
                dataFactory.addPost = function (post) {
                    var commentList = [];
                    if (post.post_type === "story") {
                        storyInfo.push(post);
                        if (localStorageService.isSupported) {
                            localStorageService.set("posts", storyInfo);
                        }
                    }
                    if (post.post_type === "comment") {
                        storyInfo.forEach(function (storyInfo) {
                            if (post.post_parent === storyInfo.hanesst_id) {
                                if (storyInfo.comments.length > 0) {
                                }
                                commentList = storyInfo.comments;
                                commentList.push(post);
                                storyInfo.comments = commentList;
                                postService.setPostDetails(storyInfo);
                                if (localStorageService.isSupported) {
                                    localStorageService.set("postDetails", storyInfo);
                                }
                                ;
                            }
                            ;
                        });
                    }
                    ;
                    $http({
                        method: 'post',
                        url: '/api/post',
                        data: post
                    }).then(function successCallback(response) {
                        angular.element(document.querySelector("#error")).removeClass("alert-danger");
                        angular.element(document.querySelector("#error")).addClass("alert-success");
                        $rootScope.error = "Success: Commment added";
                    }, function errorCallback(response) {
                        angular.element(document.querySelector("#error")).removeClass("alert-success");
                        angular.element(document.querySelector("#error")).addClass("alert-danger");
                        $rootScope.error = "Error: Failed posting to backend. Using cache.";
                    });
                };

                //VOTE SYSTEM
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

                //CURRENT DATE/TIME FOR NEW POSTS
                dataFactory.getDateTime = function () {
                    var dt = new Date();
                    var utcDate = dt.toUTCString();
                    return utcDate;
                };


                return dataFactory;
            }]);
