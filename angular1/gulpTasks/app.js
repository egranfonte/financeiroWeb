
// Carregar gulp e os plugins através da função `require` do nodejs
const gulp = require ('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

// uma task chamar outras tasks antes
//Nova tarefa através do ´gulp.task´ com o nome 'app', importante a sequence por isso utilizamos a sequence
gulp.task('app', ['app.html', 'app.css', 'app.js','app.assets'])

// Nova tarefa através do ´gulp.task´ com o nome 'app.html'
// Renomear o arquivo que sera minificado e logo depois o minificamos com o `uglify`
// `gulp.dest` para colocar os arquivos concatenados e minificados na pasta public
gulp.task('app.html', () => {
    return gulp.src('app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true}))
        .pipe(gulp.dest('public'))
})

gulp.task('app.css', () => {
  return gulp.src('app/**/*.css')
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})

gulp.task('app.js', () => {
  return  gulp.src('app/**/*.js')
    .pipe(babel({presets: ['env']}))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.assets', () => {
  return gulp.src('assets/**/*.*')
    .pipe(gulp.dest('public/assets'))
})



