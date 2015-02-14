var linkApp = angular.module('linkApp', []);

linkApp.controller('LinkCtrl', function($scope, $http) {

	$scope.photos = [];
	$scope.middle = "container";

	//$scope.openSideBar = true;
	$scope.allSelected = false;

	$http.get('/server/photos/').success(function(photoData) {
		var arrayToto = [];
		for (toto in photoData) {
			photoData[toto].selected = false;
			arrayToto.push(photoData[toto]);
		}
		$scope.photos = arrayToto;
	});

	$scope.toggleSelectAll = function() {
		$scope.photos.forEach(function(photo) {
			photo.selected = $scope.allSelected
		});
	};

	$scope.toggleSideBar = function() {
		var newMiddleClass = "container";
		var newMiddleClass = ($scope.middle.indexOf("toggle-sidebar") > 0 ? "" : " toggle-sidebar");
		$scope.middle = "container " + newMiddleClass;
	};

});
