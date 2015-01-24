module.exports = function(grunt) {
grunt.initConfig({
	pkg : grunt.file.readJSON('package.json'),
	less : {
		development : {
			options : {
				paths : ["assets/css"]
			},
			files : {
				"css/app.css": "css/app.less"
			}
		}
	},
	csslint : {
		strict : {
			options : {
				"import" : false,
				"adjoining-classes" : false,
				"ids" : false
			},
			src : ['css/app.css']
		}
	},
	jscs: {
		options: {
			"disallowEmptyBlocks": true,
			"disallowImplicitTypeConversion": ["numeric", "boolean", "binary", "string"],
			"disallowKeywords": ["with","eval"],
			"disallowMixedSpacesAndTabs" : true,
			"disallowMultipleLineBreaks": true,
			"disallowMultipleLineStrings": true,
			"disallowMultipleVarDecl": true,
			"requireCommaBeforeLineBreak" : true
		},
		all : ['*/src/**/*.js',"!angular/client/**","!marionette/src/vendors/require/require.js"]
	},
	jshint: {
		options : {
			reporter : require('jshint-stylish'),
			/*
			curly : true,
			eqeqeq : true,
			eqnull : true,
			*/
			browser : true,
			globals : {
				jQuery : true
			}
		},
		all : ['marionette/src/**/*.js',"Gruntfile.js","!angular/client/**","!marionette/src/vendors/require/require.js"]
	},
	watch: {
		less : {
			files : 'css/*.less',
			tasks : ['less'],
			options : {
				livereload : 35729
			}
		},
		configFiles: {
			files: [ 'Gruntfile.js', 'config/*.js' ],
			options: {
				reload: true
			}
		},
		css : {
			files : 'css/*.css',
			tasks : ['csslint']
		},
		js : {
			files : ['marionette/src/**/*.js','marionette/src/*.js'],
			tasks : ['jshint','jscs'],
			options : {
				livereload : 35729
			}
		},
		templates : {
			files : ['index.html', 'marionette/src/**/*.html','marionette/src/*.html'],
			options : { 
				livereload : 35729
			}
		}
	}
});

grunt.loadNpmTasks("grunt-jscs");

grunt.loadNpmTasks('grunt-contrib-less');

grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.loadNpmTasks('grunt-contrib-watch');

grunt.loadNpmTasks('grunt-contrib-csslint');

// Default task(s).
grunt.registerTask('default', ["watch"]);
};