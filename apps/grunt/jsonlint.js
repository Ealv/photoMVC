module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-jsonlint");

	return {
		sample: {
			src: ['locales/**/*.json']
		}

	};
};
