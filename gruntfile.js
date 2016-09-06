'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            script: {
                files: ['_node/scripts/**/*.js'],
                tasks: ['uglify'],
                options: {
                    livereload: 35735,
                },
            },
            css: {
                files: '_node/sass/{,*/}*.{scss,sass}',
                tasks: ['sass'],
                options: {
                    livereload: 35735,
                },
            },            
        },
        clean: {
            default: {
                files: [{
                    dot: true,
                    src: [
                        'content/css/home.min.css'
                    ]
                }]
            }
        },
        sass: {
            default: {
                options: {
                    style: 'compact',
                    sourceMap: false
                },
                files: {
                    'content/css/home.min.css': '_node/sass/home.scss',
                }
            }
        },
        uglify: {
            options: {
                beautify: true,
                mangle: false,
                sourceMap: false
            },
            my_target: {
                files: {
                    'scripts/main.min.js': [                 
                        '_node/scripts/main.js'                                                         
                    ],
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '_node/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'content/images/'
                }]
            }
        }
              
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('front', ['clean', 'uglify', 'imagemin', 'sass', 'watch']);
    grunt.registerTask('front_sass', ['clean', 'sass', 'watch']);
    grunt.registerTask('front_js',   ['clean', 'uglify', 'watch']);
    grunt.registerTask('front_img',  ['clean', 'imagemin', 'watch']);

};