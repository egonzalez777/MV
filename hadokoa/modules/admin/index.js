(function () {
	'use strict';
	angular
		.module('adminModule', ['ui.router'])
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('bodypart-form', {
					'url': '/',
					'templateUrl': '/admin/bodypart',
					'controller': 'AdminController'
				});
		}])
})();