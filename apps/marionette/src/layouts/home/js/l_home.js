define(['marionette','layouts/home/js/home'], 
function(Marionette,HomePanel){
	"use strict";

	return {
		render : function(){
			console.log("ccoucou");
			var App = require("app");
			App.addRegions({HomeRegion: "body"});
			App.HomeRegion.show(new HomePanel());
		}
	};
});