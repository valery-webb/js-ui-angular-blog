module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
                options: {
                    //name: ['main'],
                    //include: ['config'],
                    include: ['main'],
                    baseUrl: "js-ui-blog/js/app/",
                    //mainConfigFile: "js-ui-blog/js/app/config.js",
                    mainConfigFile: "js-ui-blog/js/app/main.js",
                    out: "build/optimized.min.js"
                }
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "build/main.min.css": "js-ui-blog/less/main.less"
                }
            }
        },

        watch: {
            styles: {
                files: ['js-ui-blog/less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.registerTask('default', ['requirejs', 'less', 'watch', 'jasmine']);
    grunt.registerTask('default', ['requirejs', 'less']);
    grunt.registerTask('run-less', ['watch']);


}