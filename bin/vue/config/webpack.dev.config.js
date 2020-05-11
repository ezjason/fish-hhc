'use strict';
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const config = require('./fish.config');

let pkg = require(path.join(process.cwd(), './package.json'));
pkg.name = encodeURIComponent(pkg.name);

/**
 * @description 环境变量
 */
const env = 'development';
process.env.NODE_ENV = 'development';
process.env.FISH_ENV = 'development';

/**
 * @description 注入全局变量
 */
const GLOBALS = {
  'process.env.FISH_ENV': JSON.stringify(env),
  'process.env.NODE_ENV': JSON.stringify(env),
  'pkg.name': JSON.stringify(pkg.name),
  'pkg.version': JSON.stringify(pkg.version),
};


module.exports = merge(base, {
  entry: [
    'webpack-hot-middleware/client?noInfo=true&reload=true',
  ],
  output: {

  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 500,
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader'
        },
      },
      {
        test: /\.(mp3|mp4)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader'
        },
      },
      {
        test: /\.(ttf|svg|woff|woff2|eot)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader'
        },
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        productionGzip: true,
        productionGzipExtensions: ['js', 'css']
      }
    }),
    new HTMLPlugin(
      {
        favicon: path.join(__dirname, '../../../favicon.ico'),
        template: config.dev.template,
        filename: 'hhc.html',
        title: pkg.name,
        env,
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS),
  ]
});