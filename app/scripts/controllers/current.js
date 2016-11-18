'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {
    $scope.cityID = $routeParams.cityID;

    $scope.currentWeather = current.query({
        cityID: $routeParams.cityID
      });
    });
