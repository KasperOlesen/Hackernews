'use strict';
/* Place your global Factory-service in this file */

angular.module('myApp.factories', [])
        .factory('dataFactory', ['$http', '$window', function ($http, $window) {

                var urlBasePost = 'api/post';
                var urlBaseComment = 'api/comment';
                var dataFactory = {};
                var postInfo = [];
                var commentCount = 0;
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
                    "post_text": "Posttext of post 1"};
                var post2 = {"username": "Karsten",
                    "post_type": "story",
                    "pwd_hash": "u35ytgata",
                    "post_title": "This is a title for test post 2",
                    "post_url": "post222LINK",
                    "post_parent": -3,
                    "hanesst_id": 31678,
                    "post_text": "Posttext of post 2"};
                var post3 = {"username": "Bo",
                    "post_type": "story",
                    "pwd_hash": "ublsadgamgata",
                    "post_title": "This is a title for test post 3",
                    "post_url": "post3LINK",
                    "post_parent": -1,
                    "hanesst_id": 243,
                    "post_text": "Posttext of post 3"};

                var comment1 = {"post_id": "325243",
                    "comment_id": "c352456",
                    "comment_parent_id": "",
                    "text": "This is a comment test",
                    "author": "kirsten"
                };

                var comment2 = {"post_id": "325243",
                    "comment_id": "c2535",
                    "comment_parent_id": "",
                    "text": "This is also a comment test2325423",
                    "author": "Henzaow"
                };

                var comment3 = {"post_id": "325243",
                    "comment_id": "c28536",
                    "comment_parent_id": "",
                    "text": "This the last comment test",
                    "author": "gunnar"};





                dataFactory.getAllPosts = function () {
//                    postInfo.push($http.get(urlBasePost));
                    postInfo.push(post1, post2, post3);

                    dataFactory.getAllComments("325243");
                    dataFactory.commentCount();
                    return postInfo;
                };

                dataFactory.getAllComments = function () {
                    var commentInfo = [];
//                    commentInfo.push($http.get(urlBaseComment + "/" + info));
                    commentInfo.push(comment1, comment2, comment3);
                    return commentInfo;
                };

                dataFactory.addPost = function (info) {
                    return $http.post(urlBasePost + "/create/" + info);
                };

                dataFactory.addComment = function (info) {
                    return $http.post(urlBaseComment + "/create/" + info);
                };

                dataFactory.commentCount = function () {
                    console.log(postInfo);
                    console.log(commentInfo);
                    postInfo.forEach(function (postInfo) {
                        postInfo.commentCount = 0;
                        postInfo.commentCount = commentInfo.length;

                    });
                };

                return dataFactory;
            }]);

        