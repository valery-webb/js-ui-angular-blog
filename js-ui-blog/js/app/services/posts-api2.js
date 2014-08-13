define(['./module'], function (services) {

    'use strict';

    return services.factory('postsAPI2', ['$http', '$resource', function ($http, $resource) {

        return {
            resource: $resource('http://54.72.3.96:3000/posts/:id', {id: '@id' }, {
                update: {
                    method: 'PUT'
                }
            })
        }

    }]);
});
