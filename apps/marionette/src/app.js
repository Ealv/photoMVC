define(['infrastructure','router'],
	function(){
		"use strict";
		var Router = require('router');
		var Marionette = require("marionette");
		var myApp = new Marionette.Application();
		myApp.initialize = function(){
			myApp.Router = new Router();
			myApp.start();
			Backbone.history.start();
		};

		return myApp;
});