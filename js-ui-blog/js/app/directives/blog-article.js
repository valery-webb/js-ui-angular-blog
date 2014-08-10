define(['./module'], function (directives) {

    'use strict';

    directives.directive('blogArticle', function () {

        return {

            restrict: 'E',

            scope: true,

            templateUrl: 'partials/blog-article.html',

            link: function(scope, element, attrs) { // its scope of directive when directive is compiled

                //console.log(scope)
               // console.log(post)

            }
        };
    })
});
