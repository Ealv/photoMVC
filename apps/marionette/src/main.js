require.config({
//	baseUrl: './',
	paths: {
		"l_home"			: 'layouts/home/js/l_home',
		"photoview"			: 'components/photo/js/v_photo',
		"photocollectionview"			: 'components/photo/js/c_photo',
		"app"				: './app',
		"jquery"			: '../bower_components/jquery/dist/jquery',
		"text"				: '../bower_components/text/text',
		"underscore"		: '../bower_components/underscore/underscore',
		"handlebars"		: '../bower_components/handlebars/handlebars',
		"backbone"			: '../bower_components/backbone/backbone',
		"marionette"		: "../bower_components/marionette/lib/backbone.marionette"
	}
});

require(['infrastructure'],function(){
	require(['app'],function(){
		"use strict";
		var App = require("app");
		App.initialize();
	});
});