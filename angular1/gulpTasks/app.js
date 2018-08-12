const gulp = require ('gulp')
// uma task chamar outras tasks antes
gulp.task('app', ['app.html', 'app.css', 'app.js','app.assets'])
gulp.task('app.html', () => {

})

gulp.task('app.css', () => {

})

gulp.task('app.js', () => {

})

gulp.task('app.assets', () => {

})