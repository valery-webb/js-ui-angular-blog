/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/javascript', {
            templateUrl: 'partials/javascript.html',
            controller: 'PageJavascriptCtrl'
        });

        $routeProvider.when('/css', {
            templateUrl: 'partials/css.html',
            controller: 'PageCssCtrl'
        });

        $routeProvider.when('/latest', {
            templateUrl: 'partials/latest.html',
            controller: 'PageLatestCtrl'
        });

        $routeProvider.when('/html', {
            templateUrl: 'partials/html.html',
            controller: 'PageHtmlCtrl'
        });

        $routeProvider.when('/design', {
            templateUrl: 'partials/design.html',
            controller: 'PageDesignCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/latest'
        });
    }]);
});
