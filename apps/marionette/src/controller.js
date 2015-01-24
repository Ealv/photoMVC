define(['marionette',"l_home"], 
function(Marionette,LayoutHome){
	"use strict";

 var myController = {
		draw : function(layout) {
			layout.render();
		}
	};

return {
	home : function () {
		require(["layouts/home/js/home", 'photoview','models/photoitem','photocollectionview'],
			function(HomePanel, PhotoView,PhotoItem,PhotoCollectionView){
				var App = require("app");
				App.addRegions({HomeRegion: "body"});
				var homePanel = new HomePanel();
				App.HomeRegion.show(homePanel);

				var collection = new Backbone.Collection({model: PhotoItem});
				collection.url = '/server/photos';
				var collectionView = new PhotoCollectionView({collection:collection});
				collection.parse = function(data){
					var da = [];
					for(var i in data)
						da.push(data[i]);
					return da;
				};
				collection.fetch();

				homePanel.getRegion("mainContent").show(collectionView);
		});
		//console.dir(PhotoView);
		},
	whatever : function () {
		myController.draw(require("l_watever"));
		}
	};
});
