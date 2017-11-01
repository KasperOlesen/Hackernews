'use strict';
/* Place your global Factory-service in this file */

angular.module('myApp.factories', [])
        .factory('dataFactory', ['$http', '$window', function ($http, $window) {

                var urlBasePost = 'api/post';
                var urlBaseComment = 'api/comment';
                var dataFactory = {};
                var postInfo = [];
                var postInfoDetails = [];
                var commentInfo = [];
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
                    "post_parent": -2,
                    "hanesst_id": 325243,
                    "post_text": "Posttext of post 1",
                    "post_karma": 635};
                var post2 = {"username": "Karsten",
                    "post_type": "story",
                    "pwd_hash": "u35ytgata",
                    "post_title": "This is a title for test post 2",
                    "post_url": "post222LINK",
                    "post_parent": -3,
                    "hanesst_id": 31678,
                    "post_text": "Posttext of post 2",
                    "post_karma": 3625};
                var post3 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "This is a title for test post 3",
                    "post_url": "post3LINK",
                    "post_parent": -1,
                    "hanesst_id": 243,
                    "post_text": "Posttext of post 3",
                    "post_karma": 45623};

                postInfo.push(post1, post2, post3);

                var comment1 = {"post_id": 325243,
                    "comment_id": "c352456",
                    "comment_parent_id": "",
                    "comment_karma": 905,
                    "text": "This is a comment test POST1POST1POST1POST1POST1POST1POST1POST1POST1POST1 POST1POST1POST1POST1POST1POST1POST1POST1POST1PPOST1POST1POST1POST1POST1POST1POST1POST1POST1PPOST1POST1POST1POST1POST1POST1POST1POST1POST1POST1",
                    "author": "kirsten"
                };

                var comment2 = {"post_id": 325243,
                    "comment_id": "c2535",
                    "comment_parent_id": "",
                    "comment_karma": 788,
                    "text": "This is also a comment test2325423 POST1POST1POST1POST1POST1POST1POST1POST1POST1POST1",
                    "author": "Henzaow"
                };

                var comment3 = {"post_id": 325243,
                    "comment_id": "c28536",
                    "comment_parent_id": "",
                    "comment_karma": 1254,
                    "text": "This the last comment test POST1POST1POST1POST1POST1POST1POST1POST1POST1POST1",
                    "author": "gunnar"};

                var comment4 = {"post_id": 243,
                    "comment_id": "c352456",
                    "comment_parent_id": "",
                    "comment_karma": 47,
                    "text": "This is a comment test POST3POST3POST3POST3POST3POST3POST3POST3POST3POST3POST3POST3",
                    "author": "kirsten"
                };

                var comment5 = {"post_id": 31678,
                    "comment_id": "c2535",
                    "comment_parent_id": "",
                    "comment_karma": 65,
                    "text": "This is also a comment test2325423 POST2POST2POST2POST2POST2POST2POST2POST2POST2POST2POST2POST2",
                    "author": "Henzaow"
                };

                var comment6 = {"post_id": 31678,
                    "comment_id": "c28536",
                    "comment_parent_id": "",
                    "comment_karma": 905,
                    "text": "This the last comment testPOST2POST2POST2POST2POST2",
                    "author": "gunnar"};

                commentInfo.push(comment1, comment2, comment3, comment4, comment5, comment6);



                dataFactory.getAllPosts = function () {
//                    postInfo.push($http.get(urlBasePost));
                    postInfo.forEach(function (postInfo) {
                        dataFactory.getAllComments(postInfo.hanesst_id);
                    });
                    return postInfo;
                };
                dataFactory.setPostDetails = function (post) {
                    postInfoDetails.data = post;
                    dataFactory.setComments(post.hanesst_id);
                };

                dataFactory.setComments = function (postId) {
                    var comments = [];
                    commentInfo.forEach(function (commentInfo) {
                        if (commentInfo.post_id === postId) {
                            comments.push(commentInfo);
                        }
                        ;
                    });
                    postInfoDetails.comments = comments;
                };
                dataFactory.getPostDetails = function () {
                    return postInfoDetails;
                };

                dataFactory.getAllComments = function (postId) {
                    postInfo.forEach(function (postInfo) {
                        if (postInfo.hanesst_id === postId) {
                            postInfo.commentCount = dataFactory.getCommentCount(postId);
                        }
                    });
//                    commentInfo.push($http.get(urlBaseComment + "/" + info));
                };

                dataFactory.addPost = function (info) {
                    return $http.post(urlBasePost + "/create/" + info);
                };

                dataFactory.addComment = function (info) {
                    return $http.post(urlBaseComment + "/create/" + info);
                };
                dataFactory.getCommentCount = function (postId) {
                    var commentCount = 0;
                    var postComments = [];
                    commentInfo.forEach(function (commentInfo) {
                        if (commentInfo.post_id === postId) {
                            postComments.push(commentInfo);
                            commentCount++;
                        }
                    });
                    return commentCount;
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

//                
//                dataFactory.upvoteComment = function () {
//                    if (this.upvoted) {
//                        this.upvoted = false;
//                        this.post_karma--;
//                    } else {
//                        this.upvoted = true;
//                        this.post_karma++;
//                    }
//                    return this;
//                };
//                dataFactory.downvoteComment = function () {
//                    if (this.upvoted) {
//                        this.upvoted = false;
//                        this.post_karma--;
//                    } else {
//                        this.upvoted = true;
//                        this.post_karma++;
//                    }
//                    return this;
//                };


                return dataFactory;
            }]);

        