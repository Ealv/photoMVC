define(['marionette','layouts/login/js/login'], 
function(Marionette,LoginPanel){
	"use strict";

	return {
		render : function(){
			var App = require("app");
			App.addRegions({LoginRegion: "body"});
			App.LoginRegion.show(new LoginPanel());  
		}
	};
});

