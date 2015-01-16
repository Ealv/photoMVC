define(['marionette',"l_home","l_login"], 
function(Marionette,LayoutLogin,LayoutHome){
	"use strict";

 var myController = {
		draw : function(layout) {
			layout.render();
		}
	};

return {
	home : function () {
		myController.draw(require("l_home"));
		},
	login : function () {
		myController.draw(require("l_login"));
		}
	};
});
