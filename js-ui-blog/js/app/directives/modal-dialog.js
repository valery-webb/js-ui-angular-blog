define(['./module'], function (directives) {

    'use strict';

    directives.directive('coreModalDialog', function () {

        return {

            restrict: 'E',

            scope: false,

            replace: true,

            transclude: true,

            templateUrl: 'partials/core-modal-dialog.html',

            link: function(scope, element, attrs) {

                scope.isVisible = false;

                scope.hideModal = function() {
                    scope.isVisible = false;
                };

                scope.toggleModal = function() {
                    scope.isVisible = !scope.isVisible;
                };
            }
        };
    })
});
