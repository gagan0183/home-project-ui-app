var app = angular.module('app');

app.controller('BookController', function($scope, $filter, $log, modalService, springService) {
    $scope.waiter = false;
    $scope.savebook = function(book, createBookForm) {
        $scope.waiter = true;
        if(createBookForm.$valid) {
            console.log("save API request");
            var data = {
                "isbn": book.isbn,
                "bookName": book.name,
                "type": book.type,
                "author": book.author,
                "startDate": $filter('date')(book.startDate, 'yyyy-MM-dd'),
                "completeDate": $filter('date')(book.endDate, 'yyyy-MM-dd'),
                "revision": book.revision === undefined ? false : true
            };
            springService.postBook(data).then(function(response) {
                $scope.waiter = false;
                var resp = JSON.parse(JSON.stringify(response));
                $log.info("response : " + JSON.stringify(resp.data));
                modalService.showAlert('Awesome!', resp.data.successMessage);
            }, function(response) {
                $log.error(JSON.stringify(response));
            });
        }
    };

    $scope.selectClass = function() {
        if(createBookForm.bookName.$dirty && createBookForm.bookName.$valid) {
            return "has-success";
        }
        else if(createBookForm.bookName.$dirty && createBookForm.bookName.$invalid)  {
            return "has-error";
        }
    };
});