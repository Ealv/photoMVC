module.exports = function(grunt) {
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	///will only minify javascript files
	//ABSOLUTLY inspire by :
	//	http://tech.pro/blog/1639/using-rjs-to-optimize-your-requirejs-project
	requirejs: {
		compile: {
			options: {
				mainConfigFile : "client/main.js",
				baseUrl: "client",
				//appDir: "./",
				dir: "build",
				//remove unused files in build directory
				removeCombined: true,
				findNestedDependencies: true,
				//optimizeCss: "standard",
				modules: [
					{
						name: "main" ,
						//exclude: ["infrastructure"],
						include: ["infrastructure"]
						//if you  want to debug this file (in production ????), uncomment it
						//excludeShallow : [ "collections/c_articles" ]
					} ,
					{
						name: "infrastructure"
					}
				],
				//optimisation will be done subsequently bu uglify task
				optimize: "none",
				//get template html in js file
				inlineText: true,
				//not sure mapping is usefull
				//generateSourceMaps: true,
				//remove header from js file
				preserveLicenseComments: false
			}
		}
	},
	//will uglify the javascript files already minified (in place uglification)
	uglify: {
		main: {
			files: {
				'build/main.js': ['build/main.js'],
				'build/infrastructure.js': ['build/infrastructure.js']
			}
		}
	},
	asciify: {
		banner:{
			text: 'Marionette build done',
			// Add the awesome to the console, and use the best font.
			options:{
				font:'isometric1',
				log:true
			}
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-requirejs');

//contrib-require is only used for minify purpose
grunt.registerTask('minify', ['requirejs']);

//will compress the minified js file into uglified file
grunt.loadNpmTasks('grunt-contrib-uglify');

//will show something done
grunt.loadNpmTasks('grunt-asciify');

// Default task(s).
grunt.registerTask('default', ["minify",'uglify','asciify']);
};