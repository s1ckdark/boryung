'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const nunjucks = require('gulp-nunjucks');
const htmlbeautify = require('gulp-html-beautify');
const path = require('path');
const merge = require('merge-stream');
const browserSync = require('browser-sync').create();
const del = require('del');

const folders = ['.', 'mobile']; // 웹, 모바일 페이지별로 폴더 분리. 폴더 내 리소스 폴더 구조는 동일함.

const baseurl = 'http://innovationlab.co.kr/project/boryung'; // project url

// run template engines
gulp.task('html', function () {
  var options = {
    'indent_size': 2,
    'max_preserve_newlines': 0
  };
  var date = new Date();

  // 웹, 모바일 폴더 별로 처리하기
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/html/**/!(_)*.html')
      .pipe(nunjucks.compile({
        baseurl: baseurl,
        version: date.getTime(), // CSS, JS 파일 캐시용 버전
        viewport_width: '1024', // pc 버전은 프로젝트마다 넓이가 상이함. mobile은 device-width으로 설정
        brand: '보령', // header logo 이미지에 들어가는 대체 텍스트
        title: '약국거리 원조에서 신약 개발까지- 보령 60년 스토리',
        description: '1957년 10월 서울 종로5가에 세 평 반짜리 약국이 문을 열었다. 스물다섯 청년 김승호는 자신의 고향 이름을 따서 ‘보령약국’이라고 이름 지었다. 그리고 60년. 제약과 헬스케어로 영역을 넓힌 보령은 계열사 9개, 매출 8000억원대 중견그룹으로 성장했다. 김승호 회장은 이제 ‘글로벌 보령’을 지휘하고 있다.',
        keyword: '보령 保寧,보령제약,보령제약그룹,종로5가,보령약국,보령약국 서울미래유산,김승호 보령제약그룹 회장 창업자,약국 1번가,약국 거리,용각산,용각산쿨,겔포스,겔포스엠,속쓰림 꼼짝 마,속쓰림을 부탁해,누크,겔포스 수출,류카쿠산,투석 사업,대한의사협회,보령의료봉사상,보령암학술상,보령중보재단,보령 생일 파티,복막 투석제 페리플러스,보령메디앙스,비알네트콤,보령바이오파마,후지이 류타,카나브,보령약국 전표,SK케미칼 선플라,LG생명과학 팩티브,일양약품 슈펙트,동아제약 자이네나,LG화학 제미글로,코오롱생명과학 인비사,리피토,이주한 보령제약,카를로스 아레나스 스텐달 멕시코',
        og_image: baseurl + '/img/og-image.jpg', // 최적 사이즈 1200x628px
        og_article_author: '', // An array of Facebook profile URLs or IDs
        og_article_publisher: 'https://www.facebook.com/joongang', // A Facebook page URL or ID
        dablena_init: 'www.innovationlab.co.kr', // client website
      }))
      .pipe(htmlbeautify(options)) // beautify HTML files
      .pipe(gulp.dest('public/' + element + '/'))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

// js/lib/ 소스 처리 - 외부 라이브러리 파일
gulp.task('js:lib', function () {
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/js/lib/*.js')
      .pipe(gulp.dest('public/' + element + '/js/lib'));
  });

  return merge(tasks);
});
// js/common/ 소스 처리 - concat & uglify js
gulp.task('js:common', function () {
  var tasks = folders.map(function(element){
    return gulp.src([
      'src/' + element + '/js/common/transparency.js',
      'src/' + element + '/js/common/jquery.utils.js',
      'src/' + element + '/js/common/utils.js',
      'src/' + element + '/js/common/layout.js',
      'src/' + element + '/js/common/video.js',
      'src/' + element + '/js/common/sns.js'
    ])
      .pipe(sourcemaps.init())
      .pipe(concat('common.js')) // concat
      .pipe(uglify()) // uglify 적용
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/' + element + '/js'));
  });

  return merge(tasks);
});
// eslint & concat & uglify js
gulp.task('js', ['js:common', 'js:lib'], function () {
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/js/*.js') // 순서대로 합쳐야할 경우 배열로 변경하세요.
      .pipe(eslint({ fix: true }))
      .pipe(eslint.format())
      .pipe(sourcemaps.init())
      .pipe(concat('script.js')) // concat
      .pipe(uglify()) // uglify 적용
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/' + element + '/js'))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

// compile sass to css
gulp.task('sass', function () {
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/sass/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer([
        // 해당 브라우저 버전에 맞춰 prefix 붙이기
        'Chrome >= 35',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 9',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12'
      ]))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/' + element + '/css'))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

// images
gulp.task('img', function () {
  var tasks = folders.map(function(element){
    var dest = 'public/' + element + '/img';
    return gulp.src('src/' + element + '/img/**/*.{jpg,jpeg,gif,png,svg,ico}')
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: ['public']
  });

  gulp.watch('src/**/html/*.{html,svg}', ['html']);
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/img/**/*.{jpg,jpeg,gif,png,svg,ico}', ['img']);
});

gulp.task('clean', function() {
  del.sync(['public/**']);
});

gulp.task('build', ['clean', 'html', 'js', 'sass', 'img'], function() {

});