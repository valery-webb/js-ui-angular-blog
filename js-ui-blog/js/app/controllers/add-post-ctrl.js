define(['./module'], function (controllers) {

    'use strict';

    controllers.controller('AddPostCtrl', ['$scope', 'postsAPI', '$rootScope', function ($scope, postsAPI, $rootScope) {

        $scope.status;

        function sendPost() {

            var postToSend = getFormValues();

            postsAPI.addPost(postToSend)
                .success(function () {
                    $scope.status = 'Inserted post! Refresh posts list.';
                    $rootScope.$broadcast('postsListWasUpdated');
                }).
                error(function(error) {
                    $scope.status = 'Unable to insert customer: ' + error.message;
                });
        }

        function getFormValues() {
            return {
                title: $scope.title,
                author: $scope.author,
                date: new Date().toJSON().slice(0,10),
                body: $scope.body
            }
        }

        $scope.addPost = function () {

            sendPost();
            $scope.hideModal();
        }

    }]);
});
