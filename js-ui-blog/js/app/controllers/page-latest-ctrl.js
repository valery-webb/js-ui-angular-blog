define(['./module'], function (controllers) {

    'use strict';

    controllers.controller('PageLatestCtrl', ['$scope', '$http', 'postsAPI', '$rootScope', function ($scope, $http, postsAPI, $rootScope ) {

        $scope.status;

        getPostsList();

        $rootScope.$on('postsListWasUpdated', getPostsList);

        function getPostsList() {
            postsAPI.getPosts()
                .success(function (posts) {
                    $scope.posts = posts;
                    console.log(posts.length)
                    $rootScope.postsList = posts;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load posts list data: ' + error.message;
                });
        }

        // @todo flexible and universe show/hide current modal toggling
        $scope.modalAddShown = false;
        $scope.modalUpdateShown = false;

        $scope.toggleAddModal = function() {
            $scope.modalAddShown = !$scope.modalAddShown;
        };

        $scope.toggleUpdateModal = function(e) {

            $scope.modalUpdateShown = !$scope.modalUpdateShown;

            var postId = e.target.getAttribute('data-id');
                $rootScope.$broadcast('populateForm', postId)
        };

        // @todo: move to the delete modal directive
        $scope.onDeletePost = function(e) {
            var postId = e.target.getAttribute('data-id');

                postsAPI.deletePost(postId)
                .success(function () {
                    $scope.status = 'Post was deleted!';
                    getPostsList();
                }).
                error(function(error) {
                    $scope.status = 'Unable to delete post: ' + error.message;
                });
        }

    }]);
});
