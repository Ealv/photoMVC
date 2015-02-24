angular.module('photoApp.controllers', [])
	.controller('PhotoListController',
		function($scope, $state, Photo) {
			//Console.dir("enterinf controler for photos");
			$scope.photos = Photo.query();
			/*
			allPhotos.$promise.then(function() {
				var slide = 0;
				for (var indexAct in allPhotos) {
					allPhotos[indexAct].active = "";
					allPhotos[indexAct].dataSlideTo = slide++;
				}
				allPhotos[0].active = "active";
				
			});
			*/

			$scope.deletePhoto = function(photo) {
				photo.$delete({
					id: photo.id
				}, function() {

				});

				/////////////TODO this code is bad////////////////////////
				var indice = false;
				console.dir($scope.photos);
				for (var i in $scope.photos) {
					var currentPhoto = $scope.photos[i];
					if ($scope.photos.hasOwnProperty(i) && currentPhoto.id === photo.id) {
						indice = i;
					}
				}
				console.log("indice " + indice + " for id " + photo.id);
				if (indice !== false) {
					$scope.photos.splice(indice, 1);
				}

				////////////////end of really messy code/////////////////////
			};
		}).controller('PhotoViewController', function($scope, $stateParams, Photo) {

		$scope.photo = Photo.get({
			id: $stateParams.id
		});

	}).controller('PhotoEditController', function($scope, $stateParams, Photo) {

		$scope.photo = Photo.get({
			id: $stateParams.id
		});

	}).controller('PhotoCreateController', function($scope, $state, $stateParams, Photo) {

		$scope.photo = new Photo();

		$scope.addPhoto = function() {
			$scope.photo.$save(function() {
				$state.go('photos');
			});
		};

	})
	////////////////////////////////about page ///////////////////////////
	.controller('PhotoAboutEditController', function($scope, $state, $stateParams) {
		$state.go('photos');
	});
