module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            js: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/jquery/dist',
                        src: 'jquery.min.js',
                        dest: 'public/js'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/socket.io-client',
                        src: 'socket.io.js',
                        dest: 'public/js'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist',
                        src: ['**'],
                        dest: 'public/'
                    },
                    {
                        expand: true,
                        cwd: 'dist',
                        src: ['**'],
                        dest: 'public/'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy']);
};