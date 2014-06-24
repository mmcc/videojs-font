module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      icons: {
        engine: 'node',
        src: 'vectors/*.svg',
        dest: 'build/fonts',
        destCss: 'build/css',
        syntax: 'bem',
        options: {
          font: 'VideoJS',
          stylesheet: 'less',
          codepoints: {
            'play': 9654,
          }
        },
        templateOptions: {
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
