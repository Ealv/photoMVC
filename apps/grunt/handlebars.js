module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-handlebars');

	return {
		compile: {
			options: {
				amd: true
			},
			src: ["marionette/src/**/templates/**/*.html"],
			dest: "marionette/src/prec/precompiled.handlebars.js"
		}
	};
};
