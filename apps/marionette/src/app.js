define(['jquery','underscore','backbone','marionette','router'], 
	function($, _ ,Backbone, Marionette,Router){
		"use strict";

		var myApp = new Marionette.Application();

		myApp.initialize = function(){
			myApp.Router = new Router();
			myApp.start();
			Backbone.history.start();
		};

		return myApp;
});