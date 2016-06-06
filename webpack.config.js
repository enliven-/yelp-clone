const webpack   = require('webpack'),
      fs        = require('fs'),
      path      = require('path'),
      getConfig = require('hjs-webpack');


// paths
const root    = path.resolve(__dirname),
      src     = path.join(root, 'src'),
      modules = path.join(root, 'node_modules'),
      dest    = path.join(root, 'dist');


// config w/ getConfig
const NODE_ENV  = process.env.NODE_ENV,
      isDev     = NODE_ENV === 'development';

const config = getConfig({
  in  : path.join(src, 'app.js'),
  out : dest,
  clearBeforeBuild: true
});


module.exports = config;