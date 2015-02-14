module.exports = function(grunt) {
	var path = require('path');

	require('grunt-config-dir')(grunt, {
		configDir: require('path').resolve('grunt'),
		fileExtensions: ['js']
	}, function(err) {
		grunt.log.error(err);
	});

	grunt.registerTask('default', ["watch"]);
};
