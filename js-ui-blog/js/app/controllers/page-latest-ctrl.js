define(['./module'], function (controllers) {

    'use strict';

    controllers.controller('PageLatestCtrl', ['$scope', 'postsAPI', '$rootScope', 'postsAPI2', function ($scope, postsAPI, $rootScope, postsAPI2) {

        $scope.status;

        getPostsList();

        $rootScope.$on('postsListWasUpdated', getPostsList);

        function getPostsList() {
            postsAPI.getPosts()
                .success(function (posts) {
                    $scope.posts = posts;
                    $rootScope.postsList = posts;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load posts list data: ' + error.message;
                });
        }

        // @todo flexible and universe show/hide current modal toggling
        $scope.toggleAddModal = function() {
            $scope.modalAddShown = true;
        };

        $scope.toggleUpdateModal = function(e) {
            $scope.modalUpdateShown = true;

            var postId = e.target.getAttribute('data-id');
                $rootScope.$broadcast('populateForm', postId)
        };

        // @todo: move to the delete modal directive
        $scope.onDeletePost = function(e) {
            var postId = e.target.getAttribute('data-id');

                postsAPI.deletePost(postId)
                .success(function () {
                    $scope.status = 'Post was deleted!';
                    getPostsList();
                }).
                error(function(error) {
                    $scope.status = 'Unable to delete post: ' + error.message;
                });
        }

    }]);
});


/* $RESOURCE USAGE examples: (just demo) 
--------------------------------------------------
$resource GET list example:
var postsList = postsAPI2.resource.query();
    postsList.$promise.then(function(data){console.log(data)}, function(error){console.log(error)})

$resource PUT example:
var updatingPost = postsAPI2.resource.update({id: 'h5gh64g34f2ddf4df'}, {title: 'title', body: 'body'});
    updatingPost.$promise.then(function(data){console.log(data)}, function(error){console.log(error)})

$resource GET by specific id example:
var post = postsAPI2.resource.get({id: 'n4n5b4b4bb4bb4'})
    post.$promise.then(function(data){console.log(data)}, function(error){console.log(error)})


$resource POST example:
var sendingPost = postsAPI2.resource.save({title: 'title', body: 'body'})
    sendingPost.$promise.then(function(data){console.log(data)}, function(error){console.log(error)})
----------------------------------------------------------------*/