'use strict';
angular.module('services',[])

.service('DateService', function () {
  var service = {
    getDateNow: getDateNow
  };

  return service;

  function getDateNow() {
    return new Date();
  }
});
