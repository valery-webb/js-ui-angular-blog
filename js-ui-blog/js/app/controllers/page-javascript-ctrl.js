define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('PageJavascriptCtrl', ['$scope',  function ($scope) {
        $scope.helloOne = 'javascript controller'
    }]);
});
