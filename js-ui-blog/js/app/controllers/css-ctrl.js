define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('CssCtrl', ['$scope', function ($scope) {
        $scope.helloOne = 'hello from css controller'
        console.log('hello from css controller')
    }]);
});
