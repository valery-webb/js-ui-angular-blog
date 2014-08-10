define(['./module'], function (directives) {

    'use strict';

    directives.directive('post', function () {

        return {

            restrict: 'E',

            scope: true,

            templateUrl: 'partials/post.html',

            link: function(scope, element, attrs) { // its scope of directive when directive is compiled

            }
        };
    })
});
