module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-jscs");

	return {
		options: {
			"disallowEmptyBlocks": true,
			"disallowImplicitTypeConversion": ["numeric", "boolean", "binary", "string"],
			"disallowKeywords": ["with", "eval"],
			"disallowMixedSpacesAndTabs": true,
			"disallowMultipleLineBreaks": true,
			"disallowMultipleLineStrings": true,
			"disallowMultipleVarDecl": true,
			"requireCommaBeforeLineBreak": true
		},
		all: ['*/src/**/*.js', "angular/client/**.js", "!angular/client/node_modules/**",
			"!marionette/src/vendors/require/require.js",
			"!marionette/src/prec/*"
		]
	};
};
