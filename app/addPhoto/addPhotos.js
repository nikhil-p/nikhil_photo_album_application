'use strict';

angular.module('myApp.addPhoto', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addPhoto', {
            templateUrl: 'addPhoto/addPhoto.html',
            controller: 'AddPhotoCtrl'
        });
    }])

    .controller('AddPhotoCtrl', [function () {

    }]);