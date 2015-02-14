module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	return {
		options: {
			reporter: require('jshint-stylish'),
			/*
			           curly : true,
			           eqeqeq : true,
			           eqnull : true,
			           */
			browser: true,
			globals: {
				jQuery: true
			}
		},
		all: ['marionette/src/**/*.js', "Gruntfile.js", "!angular/client/**",
			"!marionette/src/vendors/require/require.js",
			"!marionette/src/prec/*"
		]
	};
};
