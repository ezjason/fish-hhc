module.exports = {
    plugins: {
        //...
        'autoprefixer': {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
            ]

        },
        'cssnano':{

        },
        'postcss-pxtorem': {
            rootValue: 37.5, //vant-UI的官方根字体大小是37.5
            propList: ['*']
        }
    }
    // plugins: [
    //     require("autoprefixer")({ browsers: ['last 5 versions'] }),
    //     require('cssnano')()
    // ]

}