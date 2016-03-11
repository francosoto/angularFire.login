'use strict';

// Declare app level module which depends on views, and components - libreries
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.signup'
  // 'myApp.view2',
  // 'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/signup',{
			templateUrl: 'signup/signup.html' 
		,	controller:  'SignupCtrl'
		}).otherwise({
			redirectTo: '/home'
		}); 
}]);
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

// component routeProvider: adquirido por módulo ngRoute