import Vue from 'vue';
import App from './index.vue';
import 'lib-flexible/flexible'; // px to rem;
// import 'lib-flexible/flexible';
// compiler（模板）模式和runtime模式

// compiler
// new Vue({
//     el: '#app',
//     router: router,
//     store: store,
//     template: '<App/>',
//     components: { App }
// })

// 设置 rem 函数
function setRem() {

    // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
//设置根元素字体大小
    htmlDom.style.fontSize = htmlWidth / 20 + 'px';
}

// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}

//runtime
new Vue({
    render: h => h(App)
}).$mount("#app")