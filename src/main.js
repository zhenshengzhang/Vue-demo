// 入口文件
import Vue from 'vue'
// 按需导入mint-ui的组件
import {
  Header
} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);

// 导入mui的样式
import './lib/mui/css/mui.css'

// 导入根目录
import App from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(App)
})