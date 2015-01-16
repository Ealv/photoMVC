var linkApp = angular.module('linkApp', []);

linkApp.controller('LinkCtrl', function ($scope) {

	$scope.query = "";
	$scope.links = [
		{'name': 'Frist element','snippet': 'blo is blo '},
		{'name': 'Second element','snippet': 'bli is not something really differnet'},
		{'name': 'Thrid  element','snippet': 'bla, bla bla.'}
	];

	$scope.toto = function(){
		console.log("tototo");
		$scope.links[0].name+= "titi";
	}


	var funcfunc = function() { 
		console.log('Hi new value for item is '  + $scope.links[0].name);
		$scope.links[0].name+= "totot";
		$scope.links= [
		{'name': 'prout',
			'snippet': 'Fast just got faster with Nexus S.'},
		{'name': 'Motorola XOOM™ with Wi-Fi',
			'snippet': 'The Next, Next Generation tablet.'},
		{'name': 'MOTOROLA XOOM™',
			'snippet': 'The Next, Next Generation tablet.'}
	];
	}

	for (var i in [0,1,2,3])
		setTimeout(funcfunc, 1000 * i);
	window.toto=$scope;
	
});