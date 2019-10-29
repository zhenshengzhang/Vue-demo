// 入口文件
import Vue from 'vue'

// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 引入时间插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 2.1 导入vue-resource
import VueResource from 'vue-resource'
// 2.2 安装VueResource
Vue.use(VueResource)

// 设置请求跟路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

// 按需导入mint-ui的组件
import {
  Header,
  Swipe,
  SwipeItem,
  Button
} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// 导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 导入根目录
import App from './App.vue'
// 1.3 导入自定义的router
import router from './router.js';



var vm = new Vue({
  el: '#app',
  render: c => c(App),
  router // 1.4 挂在router对象
})