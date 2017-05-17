/**
 * Created by taho on 11.05.17.
 */
var gulp = require("gulp");
gulp.task('css-producer',function () {
   gulp.src('bower_components/materialize/dist/js/materialize.js').
       pipe(gulp.dest('app/js/third-party'));
   gulp.src('bower_components/materialize/dist/css/materialize.css').
       pipe(gulp.dest('app/css'));
});
 gulp.task('require', function () {
     gulp.src('node_modules/requirejs/require.js').
     pipe(gulp.dest('app/js/third-party'));
     gulp.src('node_modules/underscore/underscore.js').
         pipe(gulp.dest('app/js/third-party'));
 });
 gulp.task('handlebars', function () {
    gulp.src('node_modules/handlebars/dist/handlebars.js').
        pipe(gulp.dest('app/js/third-party'));
 });
 gulp.task('domReady', function () {
     gulp.src('node_modules/requirejs-domready/domReady.js').
         pipe(gulp.dest('app/js/third-party'))
 });

gulp.task('default', ['css-producer', 'require', 'handlebars', 'domReady'] , function () {});