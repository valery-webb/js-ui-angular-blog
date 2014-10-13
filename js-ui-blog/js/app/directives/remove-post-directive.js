define(['./module'], function (directives) {

    'use strict';

    directives.directive('removePostDirective', ['pService', '$rootScope', function (pService, $rootScope) {

        return {

            restrict: 'E',

            scope: {
                show: '='
            },

            templateUrl: 'partials/remove-post-template.html',

            link: function (scope, element, attrs) {

                scope.hideRemoveModal = function() {
                    scope.show = false;
                };

                scope.removePost = function (obj, postId) {

                    pService.remove({id: $rootScope.removingPostId}).$promise.then(function() {
                         $rootScope.$broadcast('postsListWasUpdated');
                     })

                    scope.hideRemoveModal();
                }
            }
        };
    }])
});
