'use strict';
const path = require('path');
const htmlWepack = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const yargs = require("yargs");
console.log('yargs',yargs)


module.exports = {
    // model: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './src/output'),
        // publicPath: '/dist/',
        filename: 'my-webpack.bundle.js'
    },
    devServer: {
        inline: false,
        port: '8380'
    },
    module: {
        rules: [
            {
                test: /.js?$/,
                include: path.resolve(path.join(__dirname)),
                exclude: /node_modules/,
                loader: "babel-loader"

            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    {
                        loader: "vue-style-loader"
                    },
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    }

                ]

            },
            {test: /\.less$/, use: ["style-loader", 'css-loader', 'less-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.(tff|eot|svg|woff|woff2)$/, use: "url-loader"},

            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            }

        ]
    },
    plugins: [
        // 开启全局的模块热替换(HMR)
        new webpack.HotModuleReplacementPlugin(),

        new VueLoaderPlugin(),

        new htmlWepack({ // 打包输出HTML
            title: 'Hello World app',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            filename: 'index.html',
            template: 'index.html'
        }),
    ],

}