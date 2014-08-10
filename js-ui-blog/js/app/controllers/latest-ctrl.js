define(['./module'], function (controllers) {

    'use strict';

    controllers.controller('LatestCtrl', ['$scope', '$http', 'postsAPI', '$rootScope', function ($scope, $http, postsAPI, $rootScope ) {

        $scope.status;

        getPostsList();

        $rootScope.$on('postsListWasUpdated', getPostsList)

        function getPostsList() {
            postsAPI.getPosts()
                .success(function (posts) {
                    $scope.posts = posts;
                    console.log(posts.length)
                })
                .error(function (error) {
                    $scope.status = 'Unable to load posts list data: ' + error.message;
                });
        }

        function getPost() {
            postsAPI.getPost('53e4cb549925e3593b73b77e')
                .success(function (post) {
                    $scope.post = post;
                    console.log(post, 'one post')
                })
                .error(function (error) {
                    $scope.status = 'Unable to load post data: ' + error.message;
                });
        }
    }]);
});
