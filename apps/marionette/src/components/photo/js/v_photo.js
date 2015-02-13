define(['marionette','models/photoitem','handlebars'],
	function(Marionette,PhotoItem,Handlebars, PhotoTemplate){
		"use strict";
		return Backbone.Marionette.ItemView.extend({
			"template":  JST["marionette/src/components/photo/templates/photo.html"],
			"tagName" : "li",
			"className" : "photo-item col-xs-12 col-md-2 col-lg-1",
			"events" : {
				"clic .toggle" :"toggleCheckBox"
			},
			toggleCheckBox: function(){
			},
			//"modelEvents" : {
			//	"change:selected": "selectedChanged" 
			//},
			initialize: function () {
			//	this.model.on('change', this.render);
				//this.model.on('change:selected', function(){console.log("change selected");});
			}
		});
});