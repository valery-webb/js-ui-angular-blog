define(['./module'], function (controllers) {

    'use strict';

    controllers.controller('AddPostCtrl', ['$scope', function ($scope) {

        $scope.addPost = function () {

            alert('New post sending...');
            // @todo: run service for send new post to the server
            $scope.hideModal();
        }

    }]);
});
