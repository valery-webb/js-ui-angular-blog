define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('HtmlCtrl', ['$scope', function ($scope) {
        $scope.helloOne = 'hello from html controller'
        console.log('hello from html controller')
    }]);
});
