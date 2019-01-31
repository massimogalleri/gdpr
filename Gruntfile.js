module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            gdpr: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    'gdpr.css': 'scss/gdpr.scss',
                }
            },
        },

        watch: {
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass:gdpr'],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass','watch']);

};