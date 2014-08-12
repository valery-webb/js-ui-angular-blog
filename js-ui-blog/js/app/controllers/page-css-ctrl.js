define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('PageCssCtrl', ['$scope', function ($scope) {
        $scope.helloOne = 'css controller'
        console.log('css controller')
    }]);
});
