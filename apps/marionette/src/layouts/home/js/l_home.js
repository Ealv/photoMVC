define(['marionette','layouts/home/js/home'], 
function(Marionette,HomePanel){
	"use strict";
	return {
		setRightContent : function(rg){
			this.rightContent  = rg;
		},
		render : function(){
			//console.log("ccoucou");
/*			var App = require("app");
			App.addRegions({HomeRegion: "body"});
			var homePanel = new HomePanel();
			homePanel.setRightContent(this.rightContent);
			App.HomeRegion.show(homePanel);
			*/
		}
	};
});