// 引入vue-router 包
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MerberContainer from './components/tabbar/MerberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

// 创建路由对象
var router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/merber',
      component: MerberContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮类
})


// 把路由暴露出去

export default router