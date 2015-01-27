define(['marionette','models/photoitem'], 
	function(Marionette,PhotoItem){
		"use strict";
		console.log("loading view ");
		
		return Backbone.Marionette.ItemView.extend({
			tagName: "tr",
			template: "<div>item.label</div>",
			model : PhotoItem,
			render : function(){return "<div>item.label</div>"; }
		});
});