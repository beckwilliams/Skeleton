'use strict';
angular.module('home',[])

.controller('HomeController', ['$scope', 'DateService', function($scope, DateService) {

  // call date service to get current date
  $scope.getDate = function() {
    DateService.getDateNow()
    .then(function (data) {
      // set time to data to update template
      $scope.time = data;
    });
  };

  $scope.clearDate = function() {
    $scope.time = undefined;
  }

}]);
