'use strict';
const path = require('path');
const babel = require('./babel.js');
const host = '127.0.0.1';
let config = {
    postCssPlugins: [
        require("autoprefixer")({
            'autoprefixer': {
                'overrideBrowserslist': [
                    "Android 4.1",
                    "iOS 7.1",
                    "Chrome > 31",
                    "ff > 31",
                    "ie >= 8"
                ]
            }
        }),
        require('cssnano')()
    ],
    babelPresets: babel.presets,
    babelPlugins: babel.plugins,
    modifyVars: {},
    host,
    port: 8380,
    jsx: false,
    dev: {
        template: path.resolve(__dirname, '../../../index.html'),
    },
    prod: {
        template: path.resolve(__dirname, '../../../index-prod.html'),
    }
};
try {
    const userConfig = require(path.join(process.cwd(), './fish.config.js'));
    if (userConfig) {
        for (let key in config) {
            if (userConfig[key]) {
                if (key === 'prod' || key === 'dev') {
                    for (let childKey in config[key]) {
                        userConfig[key][childKey] ? config[key][childKey] = userConfig[key][childKey] : void 0
                    }
                } else if (Object.prototype.toString.call(config[key]) === '[object Object]') {
                    config[key] = Object.assign({}, config[key], userConfig[key])
                } else if (typeof config[key] === 'string' || typeof config[key] === 'number') {
                    config[key] = userConfig[key]
                } else if (config[key] instanceof Array) {
                    config[key] = [...config[key], ...userConfig[key]]
                }
            }
            if (typeof userConfig[key] === 'boolean') {
                config[key] = userConfig[key]
            }
        }
    }
    if (config.jsx) {
        config.babelPresets.push('@vue/babel-preset-jsx')
    }
} catch (e) {

}

module.exports = config;