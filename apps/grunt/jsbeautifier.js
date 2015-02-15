module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-jsbeautifier");

	return {
		files: [
			"marionette/src/**/*.js",
			"../server/server.js",
			"grunt/*.js",
			"react/js/**/*.js",
			"angular/client/*.js",
			"!react/js/build.js",
			//"css/*.less",
			"marionette/src/**/*.html",
			"angular/client/*.html",
			"Gruntfile.js",
			"react/*.html",
			'!app/lib/**'
		],
		options: {
			js: {
				indentChar: "	",
				indentSize: 1,
				maxPreserveNewlines: 2
			},
			//              css: {
			//                  fileTypes: [".less"],
			//                  indentChar: "   ",
			//                  preserve_newlines: true,
			//                  //breakChainedMethods: false,
			//                  indentSize: 1,
			//                  maxPreserveNewlines: 2
			//              },
			html: {
				indentChar: "	",
				indentScripts: "keep",
				//preserve_newlines: false,
				indentSize: 1,
				maxPreserveNewlines: 2
			}
		}
	};
};
