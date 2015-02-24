var photoApp = angular.module('photoApp', [
	'ui.router', 'ngResource', 'photoApp.controllers', 'photoApp.services', 'photoApp.router'
]);

photoApp.run(function($state) {
	console.log("go to photos");
	//$state.go('about');
	$state.go('photos');
});
