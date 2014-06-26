module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      icons: {
        src: 'vectors/*.svg',
        dest: 'dist/font',
        destCss: 'dist',
        syntax: 'bem',
        options: {
          // engine: 'node',
          font: 'VideoJS',
          stylesheet: 'less',
          hashes: false,
          codepoints: {
            'play': 9654,
          },
          htmlDemoTemplate: 'templates/preview.html',
          template: 'templates/vjs-font.css',
          templateOptions: {
            baseClass: 'vjs-icon',
            classPrefix: 'vjs-',
            mixinPrefix: 'vjs_'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  // Default task(s).
  grunt.registerTask('default', ['webfont']);

};
