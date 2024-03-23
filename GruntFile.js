module.exports = function (grunt) {
    //configuration
    grunt.initConfig({
        uglify: {
            build: {
                files: ['envparser.js', 'health.js', 'middlewares.js', 'utils.js', 'server.js'].map(f => {
                    return {
                        src: 'src/'+f,
                        dest: 'dist/'+f
                    }
                })
            }
        }
    });
    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Register Tasks
}