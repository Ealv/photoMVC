
var linkApp = angular.module('linkApp', []);


linkApp.controller('LinkCtrl', function($scope, $http) {

	$scope.photos = [];
	$scope.middle = "container";

	//$scope.openSideBar = true;
	$scope.allSelected = false;

	$http.get('/services/photos/').success(function(photoData) {
		var arrayToto = [];
		for (var toto in photoData) {
			photoData[toto].selected = false;
			arrayToto.push(photoData[toto]);
		}
		$scope.photos = arrayToto;
	});

	$scope.toggleSelectAll = function() {
		$scope.photos.forEach(function(photo) {
			photo.selected = $scope.allSelected;
		});
	};

	$scope.toggleSideBar = function() {
		var newMiddleClass = "container";
		newMiddleClass = ($scope.middle.indexOf("toggle-sidebar") > 0 ? "" : " toggle-sidebar");
		$scope.middle = "container " + newMiddleClass;
	};

});


/*
angular.module('linkApp', [
	'ui.router',
	'ngResource',
	'linkApp.controllers',
	'linkApp.services'
]);


angular.module('linkApp').config(function($stateProvider, $httpProvider) {

	////////////////////////photo page related ////////////////////////:
	$stateProvider.state('photos', {
			url: '/photos',
			templateUrl: 'client/partials/photos/photos.html',
			controller: 'photoListController'
		}).state('viewphoto', {
			url: '/photos/:id/view',
			templateUrl: 'client/partials/photos/photo-view.html',
			controller: 'photoViewController'
		}).state('newphoto', {
			url: '/photos/new',
			templateUrl: 'client/partials/photos/photo-add.html',
			controller: 'photoCreateController'
		}).state('editphoto', {
			url: '/photos/:id/edit',
			templateUrl: 'client/partials/photos/photo-edit.html',
			controller: 'photoEditController'
		}).
		/////////////ingredients related  ////////////////////////////////////:
	state('ingredients', {
		url: '/ingredients',
		templateUrl: 'client/partials/ingredients/ingredients.html',
		controller: 'IngredientsListController'
	}).state('viewIngredient', {
		url: '/ingredients/:id/view',
		templateUrl: 'client/partials/ingredients/ingredient-view.html',
		controller: 'IngredientViewController'
	}).state('newIngredient', {
		url: '/ingredients/new',
		templateUrl: 'client/partials/ingredients/ingredient-add.html',
		controller: 'IngredientCreateController'
	}).state('editIngredient', {
		url: '/ingredients/:id/edit',
		templateUrl: 'client/partials/ingredients/ingredient-edit.html',
		controller: 'IngredientEditController'
	})

	/////////////about ////////////////////////////////////:
	.state('about', {
		templateUrl: 'client/partials/about.html',
		controller: 'photoAboutEditController'
	});
}).
run(function($state) {
	console.log("go to about");
	//$state.go('about');
	$state.go('photos');
});

*/
