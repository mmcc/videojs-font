module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      icons: {
        src: 'vectors/*.svg',
        dest: 'build/fonts',
        destCss: 'build/css',
        syntax: 'bem',
        options: {
           font: 'videojs',
           stylesheet: 'less'
        },
        templateOptions: {
            stylesheet: 'less',
            baseClass: 'vjs-icon',
            classPrefix: 'vjs_',
            mixinPrefix: 'vjs-'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  // Default task(s).
  grunt.registerTask('default', ['webfont']);

};
