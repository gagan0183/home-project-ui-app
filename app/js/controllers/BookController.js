var app = angular.module('app');

app.controller('BookController', function($scope) {
    $scope.savebook = function(book, createBookForm) {
        console.log(createBookForm.name);
        if(createBookForm.$valid) {
            console.log("save API request");
        }
    };
});