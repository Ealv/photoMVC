angular.module('photoApp.services', []).
factory('Photo', function($resource) {
	return $resource('/services/photos/:id', {
		id: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});

}).service('popupService', function($window) {
	this.showPopup = function(message) {
		return $window.confirm(message);
	};
});
