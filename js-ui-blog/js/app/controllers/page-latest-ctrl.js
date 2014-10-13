define(['./module'], function (controllers) {

    'use strict';

    controllers.controller('PageLatestCtrl', ['$scope', '$rootScope', 'pService', 'textModule' ,function ($scope, $rootScope, pService, textModule) {

        $scope.posts;

        $scope.updatePage = function() {

            pService.query().$promise.then(function (posts) {
                $rootScope.postsList = posts;

                angular.forEach(posts, function (post) {
                    post.body ? post.body = textModule.cutBy100(post.body) : post.body = null;
                }, this)

                $scope.posts = posts;
            })
        }

        $scope.updatePage();
        $rootScope.$on('postsListWasUpdated', $scope.updatePage);


        // @todo flexible and universe show/hide current modal toggling
        $scope.toggleAddModal = function() {
            $scope.modalAddShown = true;
        };

        $scope.toggleUpdateModal = function(e) {
            $scope.modalUpdateShown = true;

            var postId = e.target.getAttribute('data-id');
                $rootScope.$broadcast('populateForm', postId);
        };

        $scope.onRemovePost = function(e) {
            $scope.modalRemoveShown = true;
            $rootScope.removingPostId = e.target.getAttribute('data-id');
        };

    }]);
});


