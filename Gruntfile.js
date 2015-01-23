moduel.exports = function(grunt){
	grunt.initConfig({
		less: {
			dev: {
				files: {
					'assets/css/main.css':[
					'assets/less/main.less'
					]
				},
				options: {
					compress: false
				}
			},
			build: {
				files: {
					'asset/css/main.min':[
					'asset/less/main.less'
					]
				},
				options: {
					compress: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTasks('default', [
		'dev'
	]);
	grunt.registerTasks('dev', [
		'less:dev'
	]);
	grunt.registerTasks('build', [
		'less:build'
	]);
};