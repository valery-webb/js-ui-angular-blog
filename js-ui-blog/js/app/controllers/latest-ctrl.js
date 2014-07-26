define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('LatestCtrl', ['$scope', function ($scope) {
        $scope.helloOne = 'hello from latest controller'
        console.log('hello from latest controller')
    }]);
});
