<template>
  <div>

    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList"
                     :key="item.id">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格 -->

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="home/newslist">
          <img src="../../images/menu1.png"
               alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu2.png"
               alt="">
          <div class="mui-media-body">图片分享</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu3.png"
               alt="">
          <div class="mui-media-body">商品购买</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu4.png"
               alt="">
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu5.png"
               alt="">
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu6.png"
               alt="">
          <div class="mui-media-body">联系我们</div>
        </a></li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      lunboList: [] // 定义轮播图存放数组
    }
  },
  created () {
    this.getLunbotu()
  },
  methods: {
    getLunbotu () { // 获取轮播图的数据
      this.$http.get('api/getlunbo').then(result => {
        if (result.body.status === 0) {
          console.log(result.body);
          this.lunboList = result.body.message
        } else {
          Toast('获取轮播图数据失败')
        }
      })

    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    background-color: red;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  li {
    border: 0;
    img {
      width: 60px;
    }
  }
}
</style>