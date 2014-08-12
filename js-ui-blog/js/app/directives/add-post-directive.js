define(['./module'], function (directives) {

    'use strict';

    directives.directive('addPostDirective', ['postsAPI', '$rootScope', function (postsAPI, $rootScope) {

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

                    postsAPI.addPost(post)
                        .success(function () {
                            $rootScope.$broadcast('postsListWasUpdated');
                        }).
                        error(function(error) {
                            //scope.status = 'Unable to add post: ' + error.message;
                        });

                    scope.hideAddModal();
                }
            }
        };
    }])
});
