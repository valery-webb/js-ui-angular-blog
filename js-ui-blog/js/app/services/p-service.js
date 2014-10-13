define(['./module'], function (services) {

    'use strict';

    return services.factory('pService', ['$resource', function ($resource) {

        return  $resource('http://54.72.3.96:3000/posts/:id', {id: '@id' }, { update: {method: 'PUT'}})

    }]);
});
