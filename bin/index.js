const yargs = require('yargs');
const path = require('path');
const support = require('../support');
const cli = yargs
    .command('start type', '启动服务', (yargs) => {
    }, (argv) => {
        support();
        if (argv.type === 'vue') {
            require('./vue/build/start')();
        } else {
            console.log('nice to meet u!')
        }
    }).command('build env type', '打包服务', (yargs) => {
        (argv) => {
            console.log('本大爷要开始打包了')
        }
    }).option('help', {
        alias: 'h',
        describe: '显示帮助'
    }).option('version', {
            alias: 'v',
            describe: '显示版本号'
        }
    )
    .argv;