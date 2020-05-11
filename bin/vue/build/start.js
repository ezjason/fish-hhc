const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const configWebpack = require('../config/webpack.dev.config');
const config = require('../config/fish.config');
const bundler = webpack(configWebpack);
let pkg = require(path.join(process.cwd(), './package.json'));
pkg.name = encodeURIComponent(pkg.name);

module.exports = () =>
  browserSync({
    logPrefix: 'hhc',
    port: config.port,
    ui: false,
    server: {
      baseDir: path.join(process.cwd(), 'src'),
      middleware: [
        historyApiFallback(),
        webpackDevMiddleware(bundler, {
          publicPath: configWebpack.output.publicPath,
          stats: 'errors-only',
        }),
        webpackHotMiddleware(bundler),
      ],
    },
    files: [],
  });
