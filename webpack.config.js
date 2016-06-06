const webpack   = require('webpack'),
      fs        = require('fs'),
      path      = require('path'),
      getConfig = require('hjs-webpack'),
      dotenv    = require('dotenv');


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

// env vars
const dotEnvVars = dotenv.config();

const environmentEnv = dotenv.config({
  path: path.join(root, 'config', `${NODE_ENV}.config.js`),
  silent: true
});

const envVariables =
    Object.assign({}, dotEnvVars, environmentEnv);

const defines =
  Object.keys(envVariables)
  .reduce((memo, key) => {
    const val = JSON.stringify(envVariables[key]);
    memo[`__${key.toUpperCase()}__`] = val;
    return memo;
  }, {
    __NODE_ENV__: JSON.stringify(NODE_ENV)
  });

config.plugins = [
  new webpack.DefinePlugin(defines)
].concat(config.plugins);

module.exports = config;