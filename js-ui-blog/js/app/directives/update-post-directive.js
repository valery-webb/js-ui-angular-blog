define(['./module'], function (directives) {

    'use strict';

    directives.directive('updatePostDirective', ['pService', '$rootScope', function (pService, $rootScope) {

        return {

            restrict: 'E',

            scope: {
                show: '='
            },

            templateUrl: 'partials/update-post-template.html',

            link: function(scope, element, attrs) {


                scope.hideUpdateModal = function() {
                    scope.show = false;
                };


                $rootScope.$on('populateForm', populateForm);

                function populateForm(obj, postId) {

                    scope.updatingPost = $rootScope.postsList.filter(function (post) {
                        return post._id === postId;
                    })[0];
                }

                scope.onSubmitUpdate = function () {

                    pService.update({id: scope.updatingPost._id}, scope.updatingPost).$promise.then(function(){
                        $rootScope.$broadcast('postsListWasUpdated');
                    })

                    scope.hideUpdateModal();
                }
            }

        };
    }])
});