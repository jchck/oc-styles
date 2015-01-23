module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		less: {
			dev: {
				files: {
					'assets/css/main.css': [
					'assets/less/main.less'
					]
				},
				options: {
					compress: false,
					sourceMap: true,
					sourceMapFilename: 'assets/css/main.css.map'
				}
			},
			build: {
				files: {
					'assets/css/main.min.css': [
					'assets/less/main.less'
					]
				},
				options: {
					compress: true
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
			},
			dev: {
				options: {
					map: {
						prev: 'assets/css/'
					}
				},
				src: 'assets/css/main.css'
			},
			build: {
				src: 'assets/css/main.min.css'
			}
		}
	});

	grunt.registerTask('default', [
		'dev'
	]);
	grunt.registerTask('dev', [
		'less:dev',
		'autoprefixer:dev'
	]);
	grunt.registerTask('build', [
		'less:build',
		'autoprefixer:build'
	]);
};