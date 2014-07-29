/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/javascript', {
            templateUrl: 'partials/javascript.html',
            controller: 'JavascriptCtrl'
        });

        $routeProvider.when('/css', {
            templateUrl: 'partials/css.html',
            controller: 'CssCtrl'
        });

        $routeProvider.when('/latest', {
            templateUrl: 'partials/latest.html',
            controller: 'LatestCtrl'
        });

        $routeProvider.when('/html', {
            templateUrl: 'partials/html.html',
            controller: 'HtmlCtrl'
        });

        $routeProvider.when('/design', {
            templateUrl: 'partials/design.html',
            controller: 'DesignCtrl'
        });

        $routeProvider.when('/add-post', {
            templateUrl: 'partials/add-post.html',
            controller: 'AddPostCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/latest'
        });
    }]);
});
