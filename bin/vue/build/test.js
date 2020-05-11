const webpack = require('webpack');
const config = require('../config/webpack.test.config');
const path = require('path');
const {chalkError, chalkSuccess, chalkProcessing} = require('../../utils/chalkConfig');

let pkg = require(path.join(process.cwd(), './package.json'));
pkg.name = encodeURIComponent(pkg.name);

console.log(chalkSuccess('正在生成压缩过的捆绑包。这需要一点时间...'));
module.exports = () =>
  webpack(config).run((error, stats) => {
    if (error) {
      console.log(chalkError(error));
      return 1;
    } else {
      console.log(chalkProcessing(`Webpack stats: ${stats}`));
      return 0;
    }
  });

console.log(chalkSuccess('当前环境变量'));
console.log('');
console.log(chalkSuccess(`process.env.NODE_ENV: ${process.env.NODE_ENV}`));
console.log(chalkSuccess(`process.env.FISH_ENV: ${process.env.FISH_ENV}`));
console.log(chalkSuccess(`pkg.name: ${pkg.name}`));
console.log(chalkSuccess(`pkg.version: ${pkg.version}`));