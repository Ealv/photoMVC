angular.module('photoApp.router', []).config(function($stateProvider, $httpProvider) {
	$stateProvider.state('photos', {
		url: '/photos',
		templateUrl: 'partials/photos/photos.html',
		controller: "PhotoListController"
	});

	$stateProvider.state('viewPhoto', {
		url: '/photos/:id/view',
		templateUrl: 'partials/photos/photo-view.html',
		controller: "PhotoViewController"
	});

	$stateProvider.state('editPhoto', {
		url: '/photos/:id/edit',
		templateUrl: 'partials/photos/photo-edit.html',
		controller: "PhotoEditController"
	});

});
