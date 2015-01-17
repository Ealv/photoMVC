define(['marionette',"l_home"], 
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
	whatever : function () {
		myController.draw(require("l_watever"));
		}
	};
});
