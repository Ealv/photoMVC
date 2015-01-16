// Filename: views/project/list
define([
	'jquery',
	'underscore',
	'marionette',
	// Using the Require.js text! plugin, we are loaded raw text
	// which will be used as our views primary template
'text!../templates/login.html'
], function($, _, Marionette, LoginPanelTemp){
	"use strict";

	var LoginPanel = Marionette.View.extend({
		className :"container",
		ui: {
			"loginbutton": "#login-button",
			"labelpassword": "#password-input"
		},
		events: {
			"click @ui.loginbutton"		: "login",
			"keyup @ui.labelpassword"	: "login"
		},
		login : function(){
			require("app").Router.navigate("home",true);
		},
		render: function(){
			var compiledTemplate = _.template( LoginPanelTemp, {} );
			this.$el.append( compiledTemplate);
		}	
	});
	return LoginPanel;
});