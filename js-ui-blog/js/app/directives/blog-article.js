define(['./module'], function (directives) {

    'use strict';

    directives.directive('blogArticle', function () {

        return {

            restrict: 'E',

            scope: true,

            templateUrl: 'partials/blog-article.html',
        };
    })
});
