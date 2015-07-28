'use strict';

angular.module('myApp.viewAllPhotos', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/viewAllPhotos', {
            templateUrl: 'viewAllPhotos/viewAllPhotos.html',
            controller: 'ViewAllPhotosCtrl'
        });
    }])

    .controller('ViewAllPhotosCtrl', [function () {

    }]);