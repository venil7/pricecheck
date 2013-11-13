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
              'js/app.min.js': 
                [
                  'js/app.js'
                ]
            }
          },
        },

        concat: {
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
        },

        less: {
          prod: {
            files: {
              'dist/style.css': ['style/*.less']
            }
          }
        },

        /*cssmin: {
          prod: {
            files: {
              'style/style.css': ['style/*.css']
            }
          }
        }*/
    });

    grunt.registerTask('prod-js', ['uglify:prod', 'concat:prod']);
    grunt.registerTask('prod-css', ['less:prod'/*, 'cssmin:prod'*/]);
    
    grunt.registerTask('default', ['prod-js','prod-css']);

};