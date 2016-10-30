(function(angular) {
    'use strict';
    var app = angular.module('smartTableApp', ['smartTableApp.controllers', 'smartTableApp.directives', 'ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home")
        $stateProvider.state('home', {
            url: "/home",
            templateUrl: "app/views/partials/home.html",
            controller: 'HomeController'
        }).state('home.table', {
            url: "/table",
            templateUrl: "app/views/partials/table.html",
            controller: 'TableController'
        })
    });

})(angular);