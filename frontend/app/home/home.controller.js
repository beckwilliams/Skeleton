'use strict';
angular.module('home',[])

.controller('HomeController', ['$scope', 'DateService', function($scope, DateService) {
  $scope.time = DateService.getDateNow();
}]);
