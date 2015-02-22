module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-jsbeautifier");

	return {
		files: [
			"{marionette,react,angular}/src/**/*.{js,html,json}",
			"Gruntfile.js",
			"grunt/*.js",
			"../package.json",
			"./package.json",
			"../server/*.js",
			"!react/js/build.js",
			//"css/*.less",
			'!app/lib/**'
		],
		options: {
			js: {
				indentChar: "	",
				indentSize: 1,
				maxPreserveNewlines: 2
			},
			json: {
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
