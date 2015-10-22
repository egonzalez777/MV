(function () {
	'use strict';
	angular
		.module('HadokoaApp', 
			[
				'ui.router',
				'adminModule'
			])
		.config(['$urlRouterProvider', function ($urlRouterProvider) {
			$urlRouterProvider
				.otherwise('/');
		}])
})();