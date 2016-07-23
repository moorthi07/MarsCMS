module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            bowerjs: {
                src: [
                    './bower_components/angular/angular.js',
                    './bower_components/angular-animate/angular-animate.js',
                    './bower_components/angular-aria/angular-aria.js',
                    './bower_components/angular-touch/angular-touch.js',
                    './bower_components/angular-resource/angular-resource.js',
                    './bower_components/angular-material/angular-material.js',
                    './bower_components/angular-ui-router/release/angular-ui-router.js',                    
                    './bower_components/angular-sanitize/angular-sanitize.js',
                    './bower_components/rangy/rangy-core.js',
                    './bower_components/angular-file-data-url/src/fileDataUrl.js',
                    './bower_components/marked/lib/marked.js',
                    './bower_components/angular-marked/angular-marked.js',
                    './bower_components/ng-file-upload/ng-file-upload-all.js',
                    './bower_components/ngmap/build/scripts/ng-map.js',
                    './bower_components/tinymce-dist/tinymce.js',
                    './bower_components/angular-ui-tinymce/src/tinymce.js'
                ],
                dest: './public/dist/bower.js'
            },
            //uncomment for production and comment the below one. temporary for debugging
            scriptsjs: {
                src: [
                    './public/app/**/*.js'
                ],
                dest: './public/dist/script.js'
            },
//              scriptsjs: {
//                src: [
//                    './public/app/**/*.js'
//                ],
//                dest: './public/dist/script.min.js'
//            },
            bowercss: {
                src: [
                    './bower_components/angular-material/angular-material.css',
                      './bower_components/font-awesome/css/font-awesome.css' 
                ],
                dest: './public/dist/bower.css'
            },
            customcss: {
                src: [
                    './public/css/**/*.css'
                ],
                dest: './public/dist/style.css'
            }
        },
        uglify: {
            bowerjs: {
                files: {
                    './public/dist/bower.min.js': './public/dist/bower.js'
                }
            }
            ,
            scriptsjs: {
                files: {
                    './public/dist/script.min.js': './public/dist/script.js'
                }
            }
        },
        cssmin: {
            bowercss: {
                files: {
                    './public/dist/bower.min.css': './public/dist/bower.css'
                }
            },
            customcss: {
                files: {
                    './public/dist/style.min.css': './public/dist/style.css'
                }
            }
        },
        watch: {
            scripts: {
                files: ['./public/app/**/*.js'],
                tasks: ['concat:scriptsjs', 'uglify:scriptsjs']
            },
             scripts: {
                files: ['./public/app/**/*.js'],
                tasks: ['concat:scriptsjs']
            },
            css: {
                files: ['./public/css/**/*.css'],
                tasks: ['concat:customcss', 'cssmin:customcss']
            },
            html: {
                files: ['./public/app/**/*.html'],
                tasks: ['copy:html']
            },
            json: {
                files: ['./public/app/**/*.json'],
                tasks: ['copy:json']
            }
        },
        copy: {
            // ????? REMOVE / FIX tinymcetheme, tinymcePlugin
            html: {
                cwd: './public/app/',
                src: '**/*.html',
                dest: './public/dist/app/',
                expand: true
            },
            json: {
                cwd: './public/app/',
                src: '**/*.json',
                dest: './public/dist/app/',
                expand: true
            },fafont: {
                cwd: './bower_components/font-awesome/fonts/',
                src: '**/*.*',
                dest: './public/dist/fonts/',
                expand: true
            },tinymcetheme: {
                cwd: './bower_components/tinymce-dist/themes/modern/',
                src: '**/*.*',
                dest: './public/dist/themes/modern/',
                expand: true
            },
             tinymcePlugin: {
                cwd: './bower_components/tinymce-dist/plugins/',
                src: '**/*.*',
                dest: './public/dist/plugins/',
                expand: true
            },
             tinymceSKINS: {
                cwd: './bower_components/tinymce-dist/skins/',
                src: '**/*.*',
                dest: './public/dist/skins/',
                expand: true
            }
        }
    });

    //Loading NPM tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    //default task
//    Uncomment for production
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy']);
//     grunt.registerTask('default', ['concat',   'cssmin', 'copy']);
};