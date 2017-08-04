module.exports = function(grunt) {
	"use strict";
	var webAppDir = "webapp";

	var config = {
		babel: {
			options: {
				sourceMap: true,
				presets: ['es2015']
			},
			dist: {
				files: [{
					expand: true,
					cwd: "webapp/controller",
					src: ["**/*.js"],
					dest: "dist/controller"
				}]
			}
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'dist/css/style.css': 'webapp/css/style.scss'
				}
			}
		}
	};
	
	grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
	
	grunt.config.merge(config);

	grunt.loadNpmTasks("grunt-babel");
	
	grunt.loadNpmTasks("babel-preset-es2015");

	grunt.registerTask('default', [		
		'clean',	
		'build',
		'babel',
		'lint'
	]);

};