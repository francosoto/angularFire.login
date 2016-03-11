'use strict';

angular.module(
	'myApp.listUsers'
, 	['ngRoute','firebase']
)
.config([
	'$routeProvider'
, 	function($routeProvider) {
		$routeProvider.when('/list', {
			templateUrl: 'list/list.html',
			controller: 'ListCtrl'
		});
	}
])
.controller(
	'ListCtrl'
, 	['$scope',function($scope) {
		$scope.message = "Copate con esta naranja";
	}
]);