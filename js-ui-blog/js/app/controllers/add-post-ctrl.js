define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('AddPostCtrl', ['$scope', function ($scope) {
        $scope.addPost = 'hello from html controller'
        console.log('hello from add post controller')
    }]);
});
