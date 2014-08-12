define(['./module'], function (services) {

    'use strict';

    return services.factory('postsAPI', ['$http', function ($http) {

        var urlBase = 'http://54.72.3.96:3000/posts',
            postsAPI = {};

            postsAPI.getPosts = function () {
                return $http.get(urlBase);
            };

            postsAPI.getPost = function (id) {
                return $http.get(urlBase + '/' + id);
            };

            postsAPI.addPost = function (post) {
                return $http.post(urlBase, post);
            };

            postsAPI.updatePost = function (id, post) {
                return $http.put(urlBase + '/' + id, post)
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
