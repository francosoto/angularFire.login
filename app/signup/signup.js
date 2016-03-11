'use strict';

angular.module(
	'myApp.signup'
,	['ngRoute','firebase']
)
.config([
	'$routeProvider'
,	function($routeProvider) {
		$routeProvider.when(
			'/signup'
		,	{
				templateUrl: 	'signup/signup.html'
			,	controller: 	'SignupCtrl'
			}
		)
	}
])//Mejor separo la conexióna  la base de datos
.factory("users", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database location where we will store our data
    // var randomRoomId = Math.round(Math.random() * 100000000);
    // var ref = new Firebase("https://glaring-torch-3427.firebaseio.com/users");

    // this uses AngularFire to create the synchronized array
    return $firebaseArray(
    	new Firebase("https://glaring-torch-3427.firebaseio.com/users")
    );
  }
])
.controller(
	'SignupCtrl'
,	['$scope','users',function($scope,users) {
		console.log("soy controlador signup")
		// $scope.users = 
		// var users = $firebaseObject(connect.find('users'));

		console.log(users);

		var msgNames 
		= 	['showMsgEmail','showMsgName','showMsgPass','showMsgRePass','showMsgCountry'];

		$scope.isTotalRequired = function() {
			var to = [];
			angular.forEach(msgNames,function(value,key){
				if()
					$scope[value] = "This field is required";
			}, to);

			return to.length > 0;
		}

		$scope.SignUp = function(event) {
			console.log($scope.user)

			if(this.isTotalRequired())
				return;
			else if($scope.user.password != $scope.user.repassword)
				$scope.showMsgRePass 
				= 	"The Passwords isn't equals";
			else if(!$scope.user.email)
				$scope.showMsgEmail
				=	"This Value must be a email valid";
			else {
				users.$add({
					id: Math.round(Math.random() * 100000000)
				,	email: $scope.user.email
				,	password: $scope.user.password
				,	name: $scope.user.name
				,	country: $scope.user.country
				})
				angular.forEach(msgNames,function(value,key){
					console.log(value,key)
					$scope[value] = "";
				})
			}
		}
	}
]);