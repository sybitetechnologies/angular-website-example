(function () {
    'use strict';


// Declare app level module which depends on filters, and services
    var myApp = angular.module('myApp', [
            'ngRoute',
            'ngAnimate',
            'myApp.filters',
            'myApp.services',
            'myApp.directives',
            'myApp.controllers',
            'ui.bootstrap'
        ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
            $routeProvider.when('/aboutus', {templateUrl: 'partials/aboutus.html', controller: 'AboutUsCtrl'});
            $routeProvider.when('/products', {templateUrl: 'partials/products.html', controller: 'ProductsCtrl'});
            $routeProvider.when('/boilers', {templateUrl: 'partials/products-gallery.html', controller: 'CarouselCtrl'});
            $routeProvider.when('/water-heaters', {templateUrl: 'partials/products-gallery.html', controller: 'CarouselCtrl'});
            $routeProvider.when('/brochure', {templateUrl: 'partials/brochurerequest.html', controller: 'BrochureRequestCtrl'});
            $routeProvider.when('/downloads', {templateUrl: 'partials/downloads.html', controller: 'DownloadsCtrl'});
            $routeProvider.when('/stockist', {templateUrl: 'partials/stockist.html', controller: 'StockistCtrl'});
            $routeProvider.otherwise({redirectTo: '/'});
        }]);

}());