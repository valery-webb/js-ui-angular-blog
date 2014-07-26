define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('JavascriptCtrl', ['$scope', function ($scope) {
        $scope.helloOne = 'hello from javascript controller'
        console.log('hello from javascript controller')
    }]);
});
