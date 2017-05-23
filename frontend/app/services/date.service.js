'use strict';
angular.module('services',[])

.service('DateService', function ($http) {
  // define service functions
  var service = {
    getDateNow: getDateNow
  };

  // return service with functions defined above
  return service;

  // gets the current date
  function getDateNow() {
    var dateUrl = "http://localhost:8081/date";
    return $http.get(dateUrl)
      .then(function (response) {
        if (response.status === 200) {
          // good data
          return response.data;
        } else {
          // bad response code
          throw new Error("Non-Ok status returned from date service. (" + response.status + ")");
        }
      })
      .catch(function (error) {
        throw error;
      });
  }
});
