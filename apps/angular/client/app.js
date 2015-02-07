var linkApp = angular.module('linkApp', []);

linkApp.controller('LinkCtrl', function ($scope,$http) {

	$scope.photos = [];
	$scope.middle = "container";

	$http.get('/server/photos/').success(function(photoData) {
						var arrayToto = [];
						for(toto in photoData){
							arrayToto.push(photoData[toto]);
						}
						$scope.photos = arrayToto;
	});

	$scope.toggleSideBar = function(){
		var newMiddleClass = "container";
		var newMiddleClass= ($scope.middle.indexOf("active") > 0 ? "" : " active");
		$scope.middle = "container " + newMiddleClass;
	};

});