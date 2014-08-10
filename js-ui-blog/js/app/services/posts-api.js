define(['./module'], function (services) {

    'use strict';

    return services.factory('postsAPI', ['$http', function ($http) {

        var urlBase = 'http://54.72.3.96:3000/posts',
            postsAPI = {};

            postsAPI.getPosts = function () {
                return $http.get(urlBase, {cache: true});
            };

            postsAPI.getPost = function (id) {
                return $http.get(urlBase + '/' + id);
            };

            postsAPI.addPost = function (post) {
                return $http.post(urlBase, post);
            };

            postsAPI.updatePost = function (cust) {
                return $http.put(urlBase + '/' + cust.ID, cust)
            };

            postsAPI.deletePost = function (id) {
                return $http.delete(urlBase + '/' + id);
            };

            postsAPI.getByDynamicId = function (id) {
                return $http.get(urlBase + '/' + id + '/more_url');
            };

            return postsAPI

    }]);
});
