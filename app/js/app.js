var app = angular.module('app', ['ngMaterial', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log("in config");
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('home');

    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home.html'   
        })
        .state('addbook', {
            url: '/addbook',
            templateUrl: 'addBook.html',
            controller: 'BookController'
        });
});