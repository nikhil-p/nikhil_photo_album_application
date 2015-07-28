'use strict';

angular.module('myApp.addPhoto', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addPhoto', {
            templateUrl: 'addPhoto/addPhoto.html',
            controller: 'AddPhotoCtrl'
        });
    }])

    .controller('AddPhotoCtrl', [function ($scope,FileUploader) {
        $scope.uploader = new FileUploader({
            url: "http://localhost:8000/app/images",

            filters: [{
                name: 'xls',
                fn: function (item) {
                    return item.name
                        && (item.name.indexOf('.xls', this.length - '.xls'.length) !== -1
                        || item.name.indexOf('.xlsx', this.length - '.xlsx'.length) !== -1);
                }
            }, {
                name: 'img',
                fn: function (item) {
                    return item.type && item.type.indexOf('image') === 0;
                }
            }]
        });
    }]);