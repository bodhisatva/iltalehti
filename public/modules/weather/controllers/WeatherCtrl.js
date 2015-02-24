'use strict'

angular.module('app').controller('WeatherCtrl', ['$scope', 'weatherServices', function($scope, weatherServices) {
  console.log('WeatherCtrl: ' + weatherServices);
  var promise = weatherServices.getData();

  promise.then(function(data) {
    var weathersAll = data.data,
      cities = [],
      key;

    for (key in weathersAll) {
      cities.push(key);
      cities.sort();
    }

    $scope.cities = cities;
    $scope.weathersAll = weathersAll;
    $scope.myInterval = 2500;
    $scope.slides = weathersAll;

    console.log($scope.weathersAll.key);
    console.log($scope.cities);
  })
}]);
