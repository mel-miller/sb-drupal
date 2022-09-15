const { dest, parallel, series, src, watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const fs = require('fs-extra');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
// const replace = require('gulp-replace');
const rename = require('gulp-rename');

// Start configuration.
var config = {};
config.foundations = {
  scss: 'src/foundations/**/_*.scss',
  js: 'src/foundations/**/*.behaviors.js',
  twig: ['src/foundations/**/*.twig', '!src/foundations/**/*.local.twig'],
};
config.utilities = {
  scss: 'src/utilities/**/_*.scss',
  js: 'src/utilities/**/*.behaviors.js',
  twig: ['src/utilities/**/*.twig', '!src/utilities/**/*.local.twig'],
};
config.components = {
  scss: 'src/components/**/_*.scss',
  js: 'src/components/**/*.behaviors.js',
  twig: ['src/components/**/*.twig', '!src/components/**/*.local.twig'],
};
config.recipes = {
  scss: 'src/recipes/**/_*.scss',
  js: 'src/recipes/**/*.behaviors.js',
  twig: ['src/recipes/**/*.twig', '!src/recipes/**/*.local.twig'],
};
config.stylesMain = 'src/main.scss';
config.public = {
  css: 'public/css',
  img: 'public/img/*',
};
config.dist = {
  all: 'dist/',
  css: 'dist/css',
  js: 'dist/js',
  twig: 'dist/twig',
  img: 'dist/img',
};

// Start tasks.

// Clean out dist directory.
const cleanDist = (done) => {
  fs.emptyDir(config.dist.all)
    .then(() => {
      console.log('dist directory cleaned');
    })
    .catch((err) => {
      console.error(err);
    });
  done();
};

// Compile all scss to css and minify.
const compileStyles = (done) => {
  src(config.stylesMain)
    .pipe(sass())
    .pipe(dest(config.public.css))
    .pipe(dest(config.dist.css))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(dest(config.dist.css));
  done();
};

// Watch for scss changes + recompile.
const watchStyles = () => {
  watch(
    [config.stylesMain, config.foundations.scss, config.utilities.scss, config.components.scss, config.recipes.scss],
    compileStyles
  );
};

// Compile js to a single file and minify.
const compileJs = (done) => {
  src([config.foundations.js, config.utilities.js, config.components.js, config.recipes.js])
    .pipe(concat('main.js'))
    .pipe(dest(config.dist.js))
    .pipe(
      minify({
        ext: {
          min: '.min.js',
        },
      })
    )
    .pipe(dest(config.dist.js));
  done();
};

// Watch for js changes + recompile.
const watchJs = () => {
  watch([config.foundations.js, config.utilities.js, config.components.js, config.recipes.js], compileJs);
};

exports.default = series(cleanDist, compileStyles, compileJs, parallel(watchStyles, watchJs));
