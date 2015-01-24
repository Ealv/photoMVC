// Filename: views/project/list
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	// Using the Require.js text! plugin, we are loaded raw text
	// which will be used as our views primary template
	'text!../templates/home.html'
], function($, _, Backbone,Marionette, HomePanelTemp){

	"use strict";
	var HomePanel =  Backbone.Marionette.LayoutView.extend({

		template : HomePanelTemp,
		ui: {
			"toggleSiderbarHeader": "#toggle-siderbar-header",
			"toggleInnerSiderbar": "#toggle-inner-siderbar",
			"fog": "#blur-layout"
		},

		regions: {
			SideBarContent: "#sidebar-layout",
			mainContent: "#main-layout"
		},

		events: {
			"click @ui.toggleSiderbarHeader"	: "siderbarToggle",
			"click @ui.toggleInnerSiderbar"		: "siderbarToggle",
			"click @ui.fog"						: "siderbarToggle" 
		},
		siderbarToggle : function(){
			$("#middle-layout").toggleClass("active");
		},
		siderbarHide : function(){
			$("#middle-layout").addClass("active");
		},
		render: function(){
			// Using Underscore we can compile our template with data
			var data = {};
			var compiledTemplate = _.template( HomePanelTemp, data );
			this.$el.append( compiledTemplate);
		}
	});
	return HomePanel;
});