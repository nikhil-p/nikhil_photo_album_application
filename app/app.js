'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.addPhoto',
    'myApp.viewAllPhotos',
    'myApp.version',
    'angularFileUpload'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/addNewPhoto'});
    }]);
