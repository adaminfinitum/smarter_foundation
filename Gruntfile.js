'use strict';
module.exports = function(grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // watch for changes and trigger sass, jshint, uglify and livereload
        watch: {
            sass: {
                files: ['**/*.{scss,sass}'],
                tasks: [
                    'sass'
                   // 'autoprefixer',
                   // 'cssmin'
                    ]
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                options: { livereload: true },
                files: ['style.css', '/js/*.js', '/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },

        // sass
        sass: {
            dist: {
                options: {
                    sourcemap: true,
                    style: 'expanded',
                    lineNumbers: true,
                    compass: true
                },
                files: {
                    'style.css': 'style.scss'
                }
            }
        },


        //
        // Auto Prefixer commented out due to problems with dependencies and not functioning correctly
        // It was commented when I forked it I soon realized why

        // autoprefixer
        // autoprefixer: {
        //     options: {
        //         browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4'],
        //         map: true
        //     },
        //     files: {
        //         expand: true,
        //         flatten: true,
        //         src: 'style.css',
        //         dest: 'style.css'
        //     },
        // },

        //
        // CSS min commented out in lieu of taking time to set up a development environment task
        // For me it's easier to just modify the sass task above when I go into production.
        //
        // css minify
        // cssmin: {
        //     options: {
        //         keepSpecialComments: 1
        //     },
        //     minify: {
        //         expand: true,
        //         cwd: '',
        //         src: ['*.css', '!*.min.css'],
        //         ext: '.css'
        //     }
        // },

        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [
                'Gruntfile.js',
                '/js/**/*.js', '/assets/**/*.js'
            ]
        },

        // uglify to concat, minify, and make source maps
        uglify: {
            plugins: {
                options: {
                    sourceMap: 'assets/js/plugins.js.map',
                    sourceMappingURL: 'plugins.js.map',
                    sourceMapPrefix: 2
                },
                files: {
                    '/js/main.min.js': [
                        'assets/js/source/plugins.js',
                        'assets/js/vendor/navigation.js',
                        'assets/js/vendor/skip-link-focus-fix.js',
                        'assets/js/vendor/yourplugin/yourplugin.js'
                    ]
                }
            },
            main: {
                options: {
                    sourceMap: 'assets/js/main.js.map',
                    sourceMappingURL: 'main.js.map',
                    sourceMapPrefix: 2
                },
                files: {
                    'assets/js/main.min.js': [
                        'assets/js/source/main.js'
                    ]
                }
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true,
                    interlaced: true
                },
                files: [{
                    expand: true,
                    cwd: '/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '/images/'
                }]
            }
        }

    });

    // register task
    grunt.registerTask('default', [
        'sass',
        //'cssmin',
        'watch'
    ]
    );
};
