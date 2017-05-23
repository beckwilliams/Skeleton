'use strict';

angular.
  module('skeletonApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('QueenCityCrew');

      $routeProvider.
        when('/home', {
          templateUrl:  'home/home.template.html',
          controller: 'HomeController'
        }).
        otherwise('/home');
    }
  ]);
