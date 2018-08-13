const gulp = require ('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
  /*
  Essa task vai ficar monitorando os arquivos no disco 
  sempre que fizer alteração ( nos arquivos ) ela vai executar atualização
  */

gulp.task('watch', function() {
    watch('app/**/*.html', () => gul.start('app.html'))
    watch('app/**/*.css', () => gulp.start('app.css'))
    watch('app/**/*.js', () => gulp.start('app.js'))
    watch('assets/**/*.*', () => gulp.start('app.assets'))

})

gulp.task('server', ['watch'], function () {
  return gulp.src('public').pipe(webserver({
    livereload: true,
    port: 4000,
    open: true
  }))
})


