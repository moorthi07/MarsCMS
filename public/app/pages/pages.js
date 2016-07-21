app.controller('pagesCtrl', ['$scope', 'Pages', '$mdSidenav', '$rootScope', 'Slug', '$mdToast', '$mdDialog', 'Comments', function ($scope, Pages, $mdSidenav, $rootScope, Slug, $mdToast, $mdDialog, Comments) {
    $scope.toggle = function () {
        $mdSidenav('left').toggle();
    };

    $scope.pages =Pages.query({
        includeAuthor: true
    });

    $scope.newPage = new Pages();
    $scope.newPage.tags = [];

    $scope.slugify = function () {
        $scope.newPage.slug = Slug.slugify($scope.newPage.title);
    };

    $scope.reset = function () {
        $scope.newPage = new Pages();
        $scope.newPage.tags = [];
    };

    $scope.show = function (page) {
        $scope.newPage = page;
    };

    $scope.save = function () {
        var i = -1; 
        var j = 0;
        
        $scope.pages.forEach(function(page){
            if(page.id === $scope.newPage.id){
                i = j;
            }
            j = j++;
        });
        
        $scope.newPage.$save().then(function (success) {
            if (i >= 0) {
                $scope.pages[i] = success;
            } else {
                $scope.pages.push(success);
            };

            $mdToast.show(
                $mdToast.simple()
                .content('Saved!')
                .position('right bottom')
            );
            $scope.reset();
        }, function (err) {
            if (err.status === 401) {
                $mdToast.show(
                    $mdToast.simple()
                    .content('Unauthorized')
                    .position('right bottom')
                );
            } else {
                console.log(err);
                $mdToast.show(
                    $mdToast.simple()
                    .content('An error occured!')
                    .position('right bottom')
                );
            }
        });
    };

    $scope.delete = function ($event, page) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this page?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            page.$delete().then(function (success) {
                var i = $scope.pages.indexOf(page);
                $scope.pages.splice(i, 1);
                if(page.id === $scope.newPage.id){
                    delete $scope.comments;
                    $scope.hideComments();
                }
                $scope.reset();
                
            }, function (err) {
                console.log(err);
                if (err.status === 401) {
                    $mdToast.show(
                        $mdToast.simple()
                        .content('Unauthorized.')
                        .position('right bottom')
                    );
                } else {
                    console.log(err);
                    $mdToast.show(
                        $mdToast.simple()
                        .content('An error occured!')
                        .position('right bottom')
                    );
                }
            });
        });
    };

    $scope.newComment = new Comments();

    $scope.revealComments = function () {
        $scope.showComments = true;
        $scope.comments = Comments.query({
            pageId: $scope.newPage.id
        });
    };

    $scope.hideComments = function () {
        $scope.showComments = false;
        delete $scope.comments;
    };

    $scope.deleteComment = function ($event, comment) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this comment?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            comment.$delete().then(function (success) {
                var i = $scope.comments.indexOf(comment);
                $scope.comments.splice(i, 1);
            }, function (err) {
                console.log(err);
                if (err.status === 401) {
                    $mdToast.show(
                        $mdToast.simple()
                        .content('Unauthorized.')
                        .position('right bottom')
                    );
                } else {
                    console.log(err);
                    $mdToast.show(
                        $mdToast.simple()
                        .content('An error occured!')
                        .position('right bottom')
                    );
                }
            });
        });
    };

    $scope.allow = function ($event, comment) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to allow this comment on the site?')
            .ariaLabel('Allow comment dialog')
            .ok('Allow')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            comment.allow = true;
            comment.$save().then(function (success) {
                var i = $scope.comments.indexOf(comment);
                $scope.comments[i] = Comments.get({id: comment.id});
            }, function (err) {
                console.log(err);
                if (err.status === 401) {
                    $mdToast.show(
                        $mdToast.simple()
                        .content('Unauthorized.')
                        .position('right bottom')
                    );
                } else {
                    console.log(err);
                    $mdToast.show(
                        $mdToast.simple()
                        .content('An error occured!')
                        .position('right bottom')
                    );
                }
            });
        });
    };

    $scope.addComment = function () {
        $scope.newComment.pageId = $scope.newPage.id;
        $scope.newComment.userId = $rootScope.me.id;
        $scope.newComment.allow = true;
        $scope.newComment.$save().then(function (success) {
            $mdToast.show(
                $mdToast.simple()
                .content('Saved!')
                .position('right bottom')
            );
            $scope.comments.push(Comments.get({id: success.id}));
            $scope.newComment = new Comments();
        }, function (err) {
            if (err.status === 401) {
                $mdToast.show(
                    $mdToast.simple()
                    .content('Unauthorized')
                    .position('right bottom')
                );
            } else {
                console.log(err);
                $mdToast.show(
                    $mdToast.simple()
                    .content('An error occured!')
                    .position('right bottom')
                );
            }
        });
    };

}]);

app.factory('Pages', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/pages/:id', {
        id: "@id"
    });
}]);

//app.factory('Comments', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
//    return $resource(SERVER_URL + '/comments/:id', {
//        id: "@id"
//    });
//}]);