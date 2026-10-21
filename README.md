# Landing Page

A responsive landing page for selling a medical product, built with HTML, CSS, JavaScript, and Gulp.js.

## Project Versions

This repository contains two versions of the project:

### 1. Source version (without Gulp)
The original development files: `index.html`, `css/style.css`, and `js/main.js`.
All code is readable and unminified.

### 2. Production version (with Gulp) - `gulp/` folder
Generated automatically by Gulp.js and ready to deliver to the client:

- `main.html`: a copy of `index.html` (not minified)
- `css/normalize.css`: copied as-is
- `css/main.css`: minified using `gulp-clean-css`
- `js/main.js`: minified using `gulp-uglify`

Minification reduces file size and improves page load performance.

## Usage

```bash
npm install
gulp watch
```

The `watch` task starts the local server, watches the source files, and rebuilds the `gulp/` folder with live reload on every change.