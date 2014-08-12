define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('PageHtmlCtrl', ['$scope', function ($scope) {
        $scope.helloOne = 'html controller'
        console.log('html controller')
    }]);
});
