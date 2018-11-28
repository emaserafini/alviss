var cache = {};
function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}

// Import files
// https://github.com/rails/webpacker/issues/705, https://webpack.js.org/guides/dependency-management/#context-module-api
// Import all stylesheets files
importAll(require.context('../application/stylesheets/', true, /\.(css|scss)$/));
// Import all js files
importAll(require.context('../application/javascripts/', true, /\.(js|jsx)$/));
