'use strict';

/**
 * @ngdoc function
 * @name hadokoaClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hadokoaClientApp
 */
angular.module('hadokoaClientApp')
  .controller('MainCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $rootScope.user = {};
    $scope.user = {};

    $scope.login = function (form) {
      console.log($scope.user);
    };
  }]);
