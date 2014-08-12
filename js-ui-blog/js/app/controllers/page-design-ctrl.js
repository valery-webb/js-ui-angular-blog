define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('PageDesignCtrl', ['$scope', function ($scope) {
        $scope.helloOne = 'design controller'
        console.log('design controller')
    }]);
});
