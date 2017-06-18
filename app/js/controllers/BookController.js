var app = angular.module('app');

app.controller('BookController', function($scope, $filter, springService) {
    $scope.progress = false;
    $scope.savebook = function(book, createBookForm) {
        $scope.progress = true;
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
                $scope.progress = false;
                console.log(response.data);
            }, function(response) {
                console.log("error");
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