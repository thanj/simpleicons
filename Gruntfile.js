
/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // This is the list of providers as taken from Quilt. Since not all of them
  // have been ported over here yet, I also need to correlate them with the
  // list from simpleicons.
  var providers = require('./providers.json'),
      iconSizes = [24,32,48,64,128]

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    shell: Object.keys(providers).reduce(
        function(subtasks, provider) {
          iconSizes.reduce(
            function(subtasks, size) {
              subtasks[provider+'-'+size] = {
                command: [
                  'inkscape', 
                    '-e', 'dist/'+size+'/'+provider+'.png',                          // export png with filename
                    '-w', size, '-h', size,                                          // dimensions
//                  '--export-background=' + '#' + providers[provider].background,   // solid background
                    '-y', '0',                                                       // background opacity
                    'src/'+provider+'/'+provider+'.svg'                              // source filename
                ].join(' ')
              };
              return subtasks
            }, subtasks
          );
          return subtasks
        }, {
          makeStage: {
            command: iconSizes.reduce( 
                function(dirs, size) { 
                  dirs.push( 'mkdir -p dist/' + size )
                  return dirs
                }, [ 'mkdir -p dist' ]
              ).join('&&')
          }
        }
      ),

  });

  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['shell']);

};

