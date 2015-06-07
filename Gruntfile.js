module.exports = function(grunt){

  "use strict";
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    sass: {
      build: {
        files: {
            'public/styles/all.css': 'public/styles/all.sass'
        }
      }
    },

    concat: {
      options: {
        banner: '(function() {',
        separator: '',
        footer: '})();'
      },
      dist: {
        src: ['public/scripts/classes/*.js', 'public/scripts/scripts.js'],
        dest: 'public/scripts/all.js'
      }
    },

    cssc: {
      build: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors:    true,
          consolidateMediaQueries:    true
        },
        files: {
          'public/styles/all.css': 'public/styles/all.css'
        }
      }
    },

    cssmin: {
      build: {
        src: 'public/styles/all.css',
        dest: 'public/styles/all.css'
      }
    },

    uglify: {
      build: {
        files: {
          'public/scripts/all.js': ['public/scripts/all.js']
        }
      }
    },

    watch: {
      css: {
        files: ['public/styles/**/*.sass'],
        tasks: ['buildCSS']
      },
      js: {
        files: ['public/scripts/classes/*.js', 'public/scripts/scripts.js'],
        tasks: ['buildScripts', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-cssc');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', []);
  grunt.registerTask('buildCSS', ['sass', 'cssc', 'cssmin']);
  grunt.registerTask('buildScripts', ['concat']);
};
