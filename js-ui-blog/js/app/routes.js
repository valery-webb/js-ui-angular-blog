/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/javascript', {
            templateUrl: 'partials/page-javascript.html',
            controller: 'PageJavascriptCtrl'
        });

        $routeProvider.when('/css', {
            templateUrl: 'partials/page-css.html',
            controller: 'PageCssCtrl'
        });

        $routeProvider.when('/latest', {
            templateUrl: 'partials/page-latest.html',
            controller: 'PageLatestCtrl'
        });

        $routeProvider.when('/html', {
            templateUrl: 'partials/page-html.html',
            controller: 'PageHtmlCtrl'
        });

        $routeProvider.when('/design', {
            templateUrl: 'partials/page-design.html',
            controller: 'PageDesignCtrl'
        });

        $routeProvider.when('/latest/:id', {
            templateUrl: 'partials/post-detailed.html',
            controller: 'PagePostDetailedCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/latest'
        });
    }]);
});
