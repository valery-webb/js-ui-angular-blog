define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('PagePostDetailedCtrl', ['$scope', '$routeParams', 'postsAPI', function ($scope, $routeParams, postsAPI) {

        $scope.status;

        postsAPI.getPost($routeParams.id)
            .success(function (post) {
                $scope.post = post;
            })
            .error(function (error) {
                $scope.status = 'Unable to load posts list data: ' + error.message;
            });
    }]);
});
