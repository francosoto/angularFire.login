'use strict';

// var ps = element.all(by.css('p'));

angular.module(
	'myApp.home'
,	['ngRoute','firebase']
)
.config([
	'$routeProvider'
,	function($routeProvider) {
		console.log($routeProvider)
		$routeProvider.when(
			'/home'
		,	{
				templateUrl: 'home/home.html'
			,	controller: 'HomeCtrl'
			}
		)
	}
])
.controller(
	'HomeCtrl'
,	['$scope','$firebaseAuth',function($scope,$firebaseAuth) {
		console.log("Soy controlador home")
		
		// var firebase = new Firebase('https://glaring-torch-3427.firebaseapp.com')
		var loginObj = $firebaseAuth(
			new Firebase('https://glaring-torch-3427.firebaseio.com/')
		);

		$scope.SignIn = function(event) {
			event.preventDefault()
			// console.log("entro acá",$scope,event)
			if($scope.user){
				// console.log(angular.element('#helpBlock'))
				// var username = $scope.user.email;
				// var password = $scope.user.password;
			// creo instancia a firebase
				loginObj.$login(
					'password'
				,	{
						email: $scope.user.email
					,	password: $scope.user.password
					}
				).then( 
					function(user){
						console.log(angular.fromJson(user))
						$scope.showMsg = "todo piola amego!";
						// $scope.
						// alert("todo piola amego!")
					}
				,	function(error) {
						console.log(angular.fromJson(error))
						$scope.showMsg = "No está todo peola amego! sos un pelotudo bárbaro";
						// alert("No está todo peola amego! sos un pelotudo bárbaro")
					}
				)
			}
			else
				alert("No está todo peola amego! sos un pelotudo bárbaro")
		}
	}]
);