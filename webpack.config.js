const configDev = require('./webpack.config.dev');
const configPro = require('./webpack.config.pro');
const merge = require('webpack-merge');

module.exports = mode =>{
    console.log("--------",mode)
    if(mode == "production"){
        return merge(configPro,{mode})
    }
    return merge(configDev,{mode});
}