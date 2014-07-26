define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('DesignCtrl', ['$scope', function ($scope) {
        $scope.helloOne = 'hello from design controller'
        console.log('hello from design controller')
    }]);
});
