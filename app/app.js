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
    }])
    .controller('AddPhotoCtrl', ['$scope', 'FileUploader', function ($scope, FileUploader) {
        $scope.uploader = new FileUploader({
            url: 'upload.php'
        });
    }]);
