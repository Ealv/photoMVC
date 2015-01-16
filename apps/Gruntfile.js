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
	jshint: {
		options : {
			reporter : require('jshint-stylish'),
			curly : true,
			eqeqeq : true,
			eqnull : true,
			browser : true,
			ignores : ['marionette/client/vendors/require/require.js'],
			globals : {
				jQuery : true
			}
		},
		all : ['*/client/**/*.js',"Gruntfile.js"]
	},
	watch: {
		less : {
			files : 'css/*.less',
			tasks : ['less'],
			options : {
				livereload : 35729,
			}
		},
		css : {
			files : 'css/*.css',
			tasks : ['csslint']
		},
		js : {
			files : ['marionette/client/**/*.js','marionette/client/*.js'],
			tasks : ['jshint'],
			options : {
				livereload : 35729,
			}
		},
		templates : {
			files : ['marionette/client/**/*.html','marionette/client/*.html'],
			options : { 
				livereload : 35729,
			}
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-less');

grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.loadNpmTasks('grunt-contrib-watch');

grunt.loadNpmTasks('grunt-contrib-csslint');

// Default task(s).
grunt.registerTask('default', ["watch"]);
};