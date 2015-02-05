var linkApp = angular.module('linkApp', []);


linkApp.controller('LinkCtrl', function ($scope,$http) {

	$scope.photos = [];

	$http.get('/server/photos/').success(function(photoData) {
						console.dir(photoData);
						$scope.photos = angular.copy(photoData);
	});

	$scope.middle = "container";

	$scope.toggleSideBar = function(){
		var newMiddleClass = "container";
		newMiddleClass+= ($scope.middle.indexOf("active") > 0 ? "" : " active");
		$scope.middle = newMiddleClass;
	};

});