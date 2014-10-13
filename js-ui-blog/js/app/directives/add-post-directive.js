define(['./module'], function (directives) {

    'use strict';

    directives.directive('addPostDirective', ['pService', '$rootScope', function (pService, $rootScope) {

        return {

            restrict: 'E',

            scope: {
                show: '='
            },

            templateUrl: 'partials/add-post-template.html',

            link: function (scope, element, attrs) {

                scope.hideAddModal = function() {
                    scope.show = false;
                };

                scope.onSubmitPost = function() {

                    var post = {
                        title: scope.title,
                        author: scope.author,
                        date: new Date().toJSON().slice(0,10),
                        body: scope.body
                    }

                    pService.save(post).$promise.then(function() {
                        $rootScope.$broadcast('postsListWasUpdated');
                    })

                    scope.hideAddModal();
                }
            }
        };
    }])
});
