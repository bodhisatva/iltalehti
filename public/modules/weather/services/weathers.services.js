/*Reading weather JSON file*/
 'use strict'

 var app = angular.module('app');

 app.service('weatherServices', function($http, $q) {
    var deferred = $q.defer();
    $http.get('/resources/json/weathers.json').then(function(data) {
      deferred.resolve(data);
    });
    this.getData = function() {
      return  deferred.promise;
    }
    console.log('weathers.weatherServices');
  });