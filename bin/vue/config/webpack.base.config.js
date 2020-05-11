'use strict';
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./fish.config');

module.exports = {
  entry: [
    path.join(process.cwd(), './src/index.js'),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', 'jsx'],
    alias: {
      '@': path.join(process.cwd(), './', 'src'),
      '_': path.join(process.cwd(), './'),
    }
  },
  devServer: {
    clientLogLevel: 'none',
    host: config.host,
    hotOnly: true,
    inline: true,
    hot: true,
    open: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: ['vue-loader'],
      },
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {presets: config.babelPresets, plugins: config.babelPlugins}
      },
      {
        test: /\.css$/, use: ['vue-style-loader', 'style-loader', {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {plugins: config.postCssPlugins}
        }]
      },
      {
        test: /\.less$/, use: ['style-loader', {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {plugins: config.postCssPlugins}
        }, {
          loader: 'less-loader',
          options: {
            modifyVars: config.modifyVars,
            javascriptEnabled: true,
          }
        }]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
