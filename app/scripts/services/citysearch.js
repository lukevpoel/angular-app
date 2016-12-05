'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('citysearch', function ($resource) {
      // Service logic
      // ...

      // Public API here
      return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&units=imperial&mode=json&APPID=fdfc6704f679f2989e7602055aaff7e8', {}, {
        find: {
          method: 'GET',
          params: {
            query: 'seattle'
          },
          isArray: false
        }
      });
    });
