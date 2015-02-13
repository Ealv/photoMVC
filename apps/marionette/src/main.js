require.config({
	paths: {
		"moduleViewer"				: "modules/viewer/js/main",
		"photoview"					: 'components/photo/js/v_photo',
		"photocollectionview"		: 'components/photo/js/c_photo',
		//"precompiled"				: 'prec/precompiled.handlebars',
		"app"						: './app',
		"i18n"						: '../bower_components/i18next/i18next.amd',
		"jquery"					: '../bower_components/jquery/dist/jquery',
		"text"						: '../bower_components/text/text',
		"underscore"				: '../bower_components/underscore/underscore',
		"handlebars"				: '../bower_components/handlebars/handlebars',
		"moment"					: '../bower_components/moment/moment',
		'moment-en'					: '../bower_components/moment/locale/en-gb',
		"handlebars.helpers"		: 'lib/handlebars.helpers',
		"backbone"					: '../bower_components/backbone/backbone',
		"marionette"				: "../bower_components/marionette/lib/backbone.marionette"
	}
});

require(['app','i18n','handlebars.helpers'],function(){

	"use strict";

	var I18n = require("i18n");
	I18n.init({
		debug: false,
		detectLngQS: 'lang',
		useCookie: false,
		fallbackLng: 'en',//No fallback language
		load: 'unspecific',//Only load the needed language
		getAsync: true, //No async in order to load file when showing a component
		ns: {
			namespaces: ['main'],
			defaultNs : 'main'
		},
		resGetPath: '../../locales/__lng__/__ns__.json'
	},
	function(t) {
			//console.log("test " + I18n.t('main.checkAllPhoto'));
			var App = require("app");
			App.initialize();
		});
});