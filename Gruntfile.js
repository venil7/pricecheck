module.exports = function(grunt){

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
    
        pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
          options: {
            banner: '\n/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          prod: {
            files: {
              'dist/app.min.js': 
                [
                  'js/*.js'
                ]
            }
          },
        },

        /*concat: {
            prod: {
              files: {
                'dist/script.min.js':
                [
                  // 'bower_components/angular/angular.min.js',
                  // 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                  'js/app.min.js'
                ]
            }
          }
        },*/

        less: {
          prod: {
            files: {
              'dist/style.css': ['style/*.less']
            }
          }
        },

        watch: {
          js: {
            files: ['js/*.js'],
            tasks: ['prod-js']
          },

          less: {
            files: ['style/*.less'],
            tasks: ['prod-css']
          }
        },

        shell: {
          webserver: {
            command: 'static'
          }
        }

        /*cssmin: {
          prod: {
            files: {
              'style/style.css': ['style/*.css']
            }
          }
        }*/
    });

    grunt.registerTask('prod-js', ['uglify:prod'/*, 'concat:prod'*/]);
    grunt.registerTask('prod-css', ['less:prod'/*, 'cssmin:prod'*/]);
    
    grunt.registerTask('default', ['prod-js','prod-css']);

};