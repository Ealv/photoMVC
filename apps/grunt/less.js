module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');

	return {
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
	};
};
