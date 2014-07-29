define(['./module'], function (controllers) {

    'use strict';

    controllers.controller('LatestCtrl', ['$scope', '$http', function ($scope, $http) {

        // @todo: move all rest api to the services
        $http({method: 'GET', url: 'js/app/mocks/posts_updated.json', cache: true}).
            success(function (data, status, headers, config) {

                angular.forEach(data, function (value, key) {
                    var date = value.date['$date'],
                        dateToConvert =  new Date(date);
                        dateToConvert = dateToConvert.toString().substring(0, 21);
                        value.date['$date'] = dateToConvert;
                });

                $scope.posts = data;
            }).
            error(function (data, status, headers, config) {

            });




    }]);
});
