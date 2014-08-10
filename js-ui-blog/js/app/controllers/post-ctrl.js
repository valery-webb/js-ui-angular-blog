define(['./module'], function (controllers) {

    'use strict';

    controllers.controller('PostCtrl', ['$scope', 'postsAPI', '$rootScope', function ($scope, postsAPI, $rootScope) {

        $scope.status;

        function deletePost (postId) {

            postsAPI.deletePost(postId)
                .success(function () {
                    $scope.status = 'Post was deleted!';
                    $rootScope.$broadcast('postsListWasUpdated');
                }).
                error(function(error) {
                    $scope.status = 'Unable to delete post: ' + error.message;
                });
        }

        $scope.onDeletePost = function (e) {

            // @todo: set dom operations in directive only
            var postId = e.target.getAttribute('data-id');
                deletePost(postId);
        }

    }]);
});
