'use strict'
angular.module('app', [
    'ui.router',
    'ui.bootstrap'
  ])
  //For configuring providers
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/core/views/home.html',
      });
  }]);
