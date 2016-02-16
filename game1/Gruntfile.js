module.exports = function(grunt) {
    grunt.initConfig({
        // copy: {
        //     main: {
        //         files: [{
        //             expand: true,
        //             cwd: 'src/',
        //             src: ['**'],
        //             dest: 'dist/'
        //         }]
        //     }
        // }
        copy: {
            js: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/jquery',
                        src: 'jquery.min.js',
                        dest: 'public/js'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy']);
};