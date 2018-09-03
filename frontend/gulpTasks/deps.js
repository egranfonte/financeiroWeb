// Carregar gulp e os plugins através da função `require` do nodejs
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
//Nova tarefa através do ´gulp.task´ com o nome 'deps', importante a sequence
gulp.task('deps',['deps.js', 'deps.css','deps.fonts'])

// Nova tarefa através do ´gulp.task´ com o nome 'deps.js'
// Carregar os arquivos que a gente quer rodar as tarefas com o `gulp.src`
// logo depois usamos o `pipe` para rodar a tarefa uglify
// `gulp.dest` para colocar os arquivos concatenados e minificados na pasta public/assets/js
gulp.task('deps.js', function() {
    return gulp.src([
      'node_modules/angular/angular.min.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
      'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
      'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
      'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
      'node_modules/admin-lte/dist/js/app.min.js',
    ])
    .pipe(uglify())
    .pipe(concat('deps.min.js'))
    .pipe(gulp.dest('public/assets/js'))
  })
  // Nova tarefa através do ´gulp.task´ com o nome 'deps.css'
  // Renomear o arquivo que sera minificado e logo depois o minificamos com o `uglifycss`
  // Rodar uma tarefa para concatenação
  // `gulp.dest` para colocar os arquivos concatenados e minificados na pasta public/assets/css
  gulp.task('deps.css', function() {
    return gulp.src([
      'node_modules/angular-toastr/dist/angular-toastr.min.css',
      'node_modules/font-awesome/css/font-awesome.min.css',
      'node_modules/admin-lte/bootstrap/css/bootstrap.min.css',
      'node_modules/admin-lte/dist/css/AdminLTE.min.css',
      'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
    ])
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('public/assets/css'))
  })
  
  gulp.task('deps.fonts', function() {
    return gulp.src([
      'node_modules/font-awesome/fonts/*.*',
      'node_modules/admin-lte/bootstrap/fonts/*.*'
    ])
    .pipe(gulp.dest('public/assets/fonts'))
  })