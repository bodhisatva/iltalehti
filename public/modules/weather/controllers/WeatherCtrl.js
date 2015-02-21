'use strict'

angular.module('app').controller('WeatherCtrl',['$scope', 'weatherServices', function($scope,weatherServices) {
    console.log('WeatherCtrl: ' +weatherServices);
    var promise = weatherServices.getData();

    promise.then(function(data) {
        $scope.weatherInformation = data.data; //json object per city
        console.log($scope.weatherInformation);
    })
}]);
