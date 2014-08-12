define(['./module'], function (directives) {

    'use strict';

    directives.directive('post', function () {

        return {

            restrict: 'E',

            scope: false,

            templateUrl: 'partials/post.html'
        };
    })
});
