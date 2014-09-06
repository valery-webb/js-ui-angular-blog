define(['./module'], function (directives) {

    'use strict';

    directives.directive('updatePostDirective', ['postsAPI', '$rootScope', function (postsAPI, $rootScope) {

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

                    postsAPI.updatePost(scope.updatingPost._id, scope.updatingPost)
                        .success(function () {
                            $rootScope.$broadcast('postsListWasUpdated');
                        }).
                        error(function(error) {
                            $scope.status = 'Unable to update post: ' + error.message;
                        });

                    scope.hideUpdateModal();
                }
            }

        };
    }])
});