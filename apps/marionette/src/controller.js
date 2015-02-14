define(['marionette', "layouts/home/js/l_home"],
	function() {
		"use strict";

		var myController = {
			draw: function(layout) {
				layout.render();
			}
		};

		return {
			home: function() {
				var HomeLayout = require("layouts/home/js/l_home");
				var App = require("app");
				App.addRegions({
					HomeRegion: "body"
				});
				var homeLayout = new HomeLayout();
				App.HomeRegion.show(homeLayout);
				require(["moduleViewer"],
					function(ModuleViewer) {
						homeLayout.getRegion("mainContent").show(ModuleViewer);
					});
			},
			whatever: function() {
				myController.draw(require("l_watever"));
			}
		};
	});
