define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('PagePostDetailedCtrl', ['$scope', '$routeParams', 'pService', function ($scope, $routeParams, pService) {

        $scope.status;

        pService.get({id: $routeParams.id }).$promise.then(function (post) {
            $scope.post = post;
        })

    }]);
});
