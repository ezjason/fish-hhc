'use strict';
const path = require('path');
const merge = require('webpack-merge');
const HTMLPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');
const webpack = require('webpack');
const config = require('./fish.config');

let pkg = require(path.join(process.cwd(), './package.json'));
pkg.name = encodeURIComponent(pkg.name);

/**
 * @description 环境变量
 */
const env = 'production';
process.env.NODE_ENV = 'production';
process.env.FISH_ENV = 'production';

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
  output: {
    path: path.join(process.cwd(), `./dist/${pkg.name}/${env === 'production' ? 'prod' : 'test'}`),
    filename: `${pkg.version}/js/[name].js?v=[hash:7]`,
    publicPath: './',
    chunkFilename: `${pkg.version}/js/[name].js?[hash:7]`
  },
  mode: 'production',
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            esModule: false,
            name: `imgs/[path][name].[ext]?v=[hash:7]`,
            publicPath: `./${pkg.version}/`,
            outputPath: `./${pkg.version}/`
          }
        },
      },
      {
        test: /\.(mp3|mp4)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            name: `medias/[path][name].[ext]?v=[hash:7]`,
            publicPath: `./${pkg.version}/`,
            outputPath: `./${pkg.version}/`
          }
        },
      },
      {
        test: /\.(ttf|svg|woff|woff2|eot)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            name: `fonts/[path][name].[ext]?v=[hash:7]`,
            publicPath: `./${pkg.version}/`,
            outputPath: `./${pkg.version}/`
          }
        },
      }
    ]
  },
  plugins: [
    new HTMLPlugin(
      {
        favicon: path.join(__dirname, '../../../favicon.ico'),
        template: config.prod.template,
        filename: path.join(process.cwd(), `./dist/${pkg.name}/${env === 'production' ? 'prod' : 'test'}/index.html`),
        title: pkg.name,
        env,
        chunks: {
          head: 'index'
        }
      }
    ),
    new webpack.DefinePlugin(GLOBALS),
  ]
});
