define(['./module'], function (directives) {

    'use strict';

    directives.directive('blogArticle', function () {

        return {

            restrict: 'E',

            scope: false,
            //scope: {
                //posts: '='
            //},

            templateUrl: 'partials/blog-article.html',
        };
    })
});
