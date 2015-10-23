'use strict';

/**
 * @ngdoc function
 * @name hadokoaClientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the hadokoaClientApp
 */
angular.module('hadokoaClientApp')
  .controller('SignupController', ['$scope', '$http', function ($scope, $http) {
    var signup;
    var user;

    $scope.signup = signup = {};
    $scope.user = user = {};

    $scope.submit = function (form) {
    	if (form.$invalid) {
    		return;
    	}

    	$http({
    		'url': 'http://localhost:3000/signup',
    		'method': 'POST',
    		'data': $scope.signup.user
    	})
    		.success(function (data, status, headers, config) {
    			console.log('data', data);
    			console.log('status', status);
    		})
    		.error(function (data, status, headers, config) {
    			console.log('error', status);
    		});
    };
  }]);