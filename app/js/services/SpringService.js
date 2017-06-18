var app = angular.module('app');

app.factory('springService', function($http) {
    return {
        postBook: function(data) {
            return $http.post('/api/book', data);
        }
    }
});