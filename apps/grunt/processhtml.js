module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-processhtml');
	return {
		build: {
			options: {
				process: true,
			},
			files: {
				'build/index.html': ['build/index.html']
			}

		}
	};
};
