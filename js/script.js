'use strict';

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'scotchControllers', 'scotchServices']);

// configure our routes
scotchApp.config(function($routeProvider) {
	$routeProvider
	// route for the page
	.when('/page/:pageid', {
		templateUrl : 'pages/home.html',
		controller  : 'pageController'
	})
	.when('/chapter/:chapterid', {
		templateUrl : 'pages/chapter.html',
		controller  : 'chapterController'
	})
	.when('/write', {
		templateUrl : 'pages/write.html',
		controller  : 'writeController'
	})
	// route for the about page
	.when('/about', {
		templateUrl : 'pages/about.html',
		controller  : 'aboutController'
	})
	// route for the contact page
	.when('/contact', {
		templateUrl : 'pages/contact.html',
		controller  : 'contactController'
	})
	.otherwise({
		redirectTo: '/page/1'
	}); 
});

var scotchServices = angular.module('scotchServices', ['ngResource']);
scotchServices.factory('Page', ['$resource', function($resource) {
	var actions = {
		list	: {method:'POST', params:{_method:'list'}, isArray:true},
		query	: {method:'POST', params:{_method:'query'}, isArray:false}
	};
	return $resource('app/chapter.php', {}, actions);
}]);

var scotchControllers = angular.module('scotchControllers', []);
scotchControllers.controller('pageController', function($scope, $routeParams, Page) {
   $scope.prev = function(event) {
	   alert($routeParams.pageid - 1);
	   window.href = '#/page/' + ($routeParams.pageid - 1);
   }
   $scope.next = function(event) {
	   alert(1 + parseInt($routeParams.pageid));
   }

   var page = Page.list({pageid:$routeParams.pageid});
   $scope.message = 'Everyone come and see how good I look!';
   $scope.chapters = page;
});
scotchControllers.controller('chapterController', function($scope, $routeParams, Page) {
	var chapter = Page.query({chapterid:$routeParams.chapterid});
	$scope.chapter = chapter;
});
scotchControllers.controller('writeController', function($scope) {
	window.write.Write("vEdit");
});
scotchControllers.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchControllers.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});
