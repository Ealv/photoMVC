module.exports = function(grunt) {
	grunt.initConfig({
		//pkg: grunt.file.readJSON('package.json'),
		watch: {
			js: {
				files: ['marionette/src/**/*.js',
					'react/js/bundle.js', 'angular/client/app.js'
				],
				tasks: ['jshint'],
				options: {
					debounceDelay: 250,
					spawn: true,
					interrupt: true
				}
			},
			html: {
				files: ['index.html', 'marionette/src/**/*.html',
					'marionette/src/*.html'
				],
				//tasks: ['handlebars'],
				options: {
					debounceDelay: 250,
					spawn: true
				}
			},
			configFiles: {
				files: ['Gruntfile.js', 'config/*.js'],
				options: {
					debounceDelay: 250,
					spawn: true,
					interrupt: true
				}
			},
			less: {
				files: 'css/*.less',
				tasks: ['less'],
				options: {
					debounceDelay: 250,
					spawn: true,
					interrupt: true
				}
			},
			json: {
				files: ['locales/**/*.json'],
				tasks: ['jsonlint'],
				options: {
					debounceDelay: 250,
					spawn: true,
					interrupt: true
				}
			},
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'css/app.css',
					'marionette/src/**/*.js',
					'react/js/bundle.js', 'angular/client/app.js',
					'index.html', 'marionette/src/**/*.html',
					'marionette/src/*.html',
					'locales/**/*.json'
				]
			}
		},
		less: {
			build: {

				options: {
					paths: [ // Where to look for files to @import
						"css/"
					]
				},
				files: [
					// @see http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
					{
						expand: true, // Enable dynamic expansion.
						cwd: "apps/css/",

						dest: "apps/css/", // Destination path prefix.
						src: ['*.less'], // Actual pattern(s) to match.
						ext: '.css'
					}, {
						"css/app.css": "css/app.less"
					}
				]
			}
		},
		csslint: {
			strict: {
				options: {
					"import": true,
					"adjoining-classes": false,
					"ids": false
				},
				//src: ['css/app.css',"!**bootstrap*"]
			}
		},
		jscs: {
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
		},
		jshint: {
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
		},
		handlebars: {
			compile: {
				options: {
					amd: true
				},
				src: ["marionette/src/**/templates/**/*.html"],
				dest: "marionette/src/prec/precompiled.handlebars.js"
			}
		},
		processhtml: {
			build: {
				options: {
					process: true,
				},
				files: {
					'build/index.html': ['build/index.html']
				}

			}
		},
		jsbeautifier: {
			files: [
				"marionette/src/**/*.js",
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
				//				css: {
				//					fileTypes: [".less"],
				//					indentChar: "	",
				//					preserve_newlines: true,
				//					//breakChainedMethods: false,
				//					indentSize: 1,
				//					maxPreserveNewlines: 2
				//				},
				html: {
					indentChar: "	",
					indentScripts: "keep",
					//preserve_newlines: false,
					indentSize: 1,
					maxPreserveNewlines: 2
				}
			}
		}

	});

	require('jit-grunt')(grunt);

	/*
		grunt.loadNpmTasks("grunt-jsbeautifier");
		grunt.loadNpmTasks('grunt-processhtml');
		grunt.loadNpmTasks('grunt-contrib-handlebars');
		grunt.loadNpmTasks("grunt-jscs");
		grunt.loadNpmTasks('grunt-contrib-less');
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-csslint');
	*/

	// Default task(s).
	grunt.registerTask('default', ["watch"]);
};
