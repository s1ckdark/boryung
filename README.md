## Innovation Lab Template
- this template purpose to manage source and contribute co-working.
- automate your build process 
   - take all your projects html,js,css, concatenate them and minify them
   - automatically inject dependencies into your html files
- listen to file changes and run tasks when a file changes
   - everytime you add a js file, you need to add include it to your html files. this can be automated
   - everytime you save a JavaScript file you want to run eslint on it, to warn for errors
   - everytime you save es5, you want it to be automatically converted into a javascript file, and have that javascript file included to your html files
   - deleting files automatically
- **if you have any question, contact lee.jungwoo1@joongang.co.kr**

## Boryung Project
- **due date is 10182017**
- At first, after `git clone`, set up on local.
- please read it all of this document.
- separate section  _brand.html, _institute.html, _april.html, _igarten.html
- separate scss files for the section (ex. _institute.scss, _institute-slider.scss) 
- also separate js files for the section.
- use relative paths/link.
- use script for insert video URL.
- use JSON data at section `injoongang`,`history`.

## local
1. `npm install` 
1. buid : `gulp build` 
   1. build from ./src, export to ./public 
   1. server : `gulp serve` 
   1. after build, start server through [BrowserSync](https://www.browsersync.io/)
   1. console show access URL 
   1. browsersync watching all files, rebuild it and browsing it default browser(browserSync.stream())

## Directory 

- `public` deploy - after compile, built it automatically. upload it to Innovation Lab server.(*Never modify it*)
- `src` workspace! work in this place!
   - `html`
      - `_head.html` when start every project, have to rewrite it. but All contents relate with `gulpfile.js`(like seo, meta, title...) *Never modify it*
      - `_header.html` layout of header
      - `_layout.html` layout
      - `index.html` 1. define **var**,**contents** and **script** base project
      - `*.html` 2. if you want to add more page, write base `index.html`
   - `img`
   - `js`
      - `common/*.js` roof script
      - `script.js` 1. script for project. when compiling, merge all JS into here. **separate multiple JS files for usage**
   - `mobile` mobile page
   - `sass` 
      - `style.scss` 

### HTML
- Template Engine [Nunjucks](https://mozilla.github.io/nunjucks)
   - compile using `gulp-nunjucks`
   - manage layout template
- formattiong thorugh `gulp-html-beautify`

### JavaScript
- ES5
- formatting thorugh `gulp-eslint`
- merge all JS into one through`gulp-concat`
- using `gulp-uglify` for Minimization and Obfuscation of code.

### CSS
- Sass
- using `gulp-sass`
- using `gulp-autoprefixer`

### Webfont
[Webfont Loader](https://github.com/typekit/webfontloader)

