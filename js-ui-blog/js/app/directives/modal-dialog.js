define(['./module'], function (directives) {

    'use strict';

    directives.directive('coreModalDialog', function () {

        return {

            restrict: 'E',

            scope: false, // that means that the only parent scope avaliable

            replace: true,

            transclude: true,

            templateUrl: 'partials/core-modal-dialog.html',

            link: function(scope, element, attrs) { // its scope of directive when directive is compiled

                scope.isVisible = false;

                scope.hideModal = function() {
                    scope.isVisible = false;
                };

                scope.toggleModal = function(e) {

                    scope.isVisible = !scope.isVisible;
                };

            }
        };
    })
});
