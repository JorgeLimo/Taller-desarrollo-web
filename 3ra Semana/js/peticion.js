var app = angular.module("taller",["lumx"]);

app.controller("primeraParte",function($scope,$http){
	$scope.posts = [];
	$scope.users = [];
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(err){
			console.log(err);
		})
	$http.get("http://jsonplaceholder.typicode.com/users")
		.success(function(data){
			console.log(data);
			$scope.users = data;
		})
		.error(function(err){
			console.log(err);
		})
});