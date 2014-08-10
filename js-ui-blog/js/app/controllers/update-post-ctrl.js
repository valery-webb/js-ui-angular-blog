define(['./module'], function (controllers) {

    'use strict';

    controllers.controller('UpdatePostCtrl', ['$scope', 'postsAPI', '$rootScope', function ($scope, postsAPI, $rootScope) {

        $scope.status;

        $scope.onUpdatePost = function (e) {

            var postId = e.target.getAttribute('data-id'),
                posts = $rootScope.postsList,
                post;

            post = posts.filter(function (post) {
                return post._id === postId;
            })

            // @todo: clarify data manipulations - use each iterator
            $scope._id = postId;
            $scope.title = post[0].title;
            $scope.author =  post[0].author;
            $scope.email =  post[0].email;
            $scope.body =  post[0].body;
        }

        // @todo: make useful method for data manipulations
        function getFormValues() {
            return {
                _id: $scope._id,
                title: $scope.title,
                author: $scope.author,
                date: new Date().toJSON().slice(0,10),
                body: $scope.body
            }
        }

        $scope.updatePost = function () {

            var post = getFormValues();

            postsAPI.updatePost(post)
                .success(function (post) {
                    $scope.status = 'Post was updated!';
                    $rootScope.$broadcast('postsListWasUpdated');
                })
                .error(function (error) {
                    $scope.status = 'Unable to update post' + error.message;
                });

            $scope.hideModal();
        }

    }]);
});
