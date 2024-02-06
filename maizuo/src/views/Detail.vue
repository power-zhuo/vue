<!--主页点击电影详情 -->
<template>
  <div v-if="filmInfo">
    <detail-header class="detailheader"><a>{{ filmInfo.name }}</a></detail-header>
    <div :style="{
      backgroundImage: 'url(' + filmInfo.poster + ')'
    }" class="poster"></div> <!-- 动态绑定背景图 -->
    <div class="content">
      <div>
        <div class="filmInfoname">{{ filmInfo.name }}</div> <!--电影名字-->
        <!-- <div v-if="films" class="pingfen"><p>观众评分{{ films.grade }}</p></div>电影评分 -->
      </div>
      <div>
      <div class="detail-text">{{ filmInfo.category }}</div> <!-- 电影类型 -->
      <div class="detail-text">{{ filmInfo.premiereAt | dateFilter }}上映</div><!--上映时间  -->
      <div class="detail-text">{{ filmInfo.nation }} | {{ filmInfo.runtime }}分钟</div> <!-- 时间-->
      <div class="detail-text" style="line-height: 15px; " :class="isHidden?'hidden':''">{{ filmInfo.synopsis }}</div>
      <div style="text-align: center;">
        <i class="iconfont " @click="isHidden=!isHidden" :class="isHidden?'icon-jiantouxia':'icon-jiantoushang'"></i> <!--如果是hidden则显示第一个icon-gengduo，如果是第二个则显示第二个icon-gengduo -->
      </div>
    </div>
  </div>
  <div class="yanzi" > <!-- @yanzi 演职人员 -->
        <div>演职人员</div>
        <detail-swiper :perview="3.8" name="actors"> <!-- name动态设置class标签，防止与其他div盒子重名，样式重复 -->
          <detail-swiper-item  v-for="(data,index) in filmInfo.actors" :key="index">
            <div :style="{
              backgroundImage: 'url(' + data.avatarAddress + ')'}" class="avatar"></div> <!-- 动态绑定背景图 -->
              <div class="dataname">{{ data.name }}</div>
              <div class="datarole">{{ data.role }}</div>
          </detail-swiper-item>
        </detail-swiper>
      </div>
      <div class="jvzao"> <!-- @yanzi 演职人员 -->
        <div>剧照</div>
        <detail-swiper :perview="2.5" name="photos">
          <detail-swiper-item  v-for="(data,index) in filmInfo.photos" :key="index">
            <div :style="{
              backgroundImage: 'url(' + data + ')'}" class="avatar"></div> <!-- 动态绑定背景图 -->
          </detail-swiper-item>
        </detail-swiper>
      </div>
  </div>
</template>
<script>
import http from '@/util/http'
import moment from 'moment'
import Vue from 'vue'
import detailSwiper from '@/mycomponents/detail/DetailSwiper'
import detailHeader from '@/mycomponents/detail/DetailHeader'
import detailSwiperItem from '@/mycomponents/detail/DetailSwiperItem'
moment.locale('zh-cn') // 设置中文
console.log(moment().format('YYYY-MM-DD'))
Vue.filter('dateFilter', () => {
  return moment().format('YYYY-MM-DD')
})
Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return '没有主演'
  // console.log(data.map(item => item.name).join(''))
  return data.map(item => item.name).join(' ')
})

// 详情顶部导航栏
Vue.directive('scroll', {
  inserted (el) {
    el.style.display = 'none' // 没达到条件时不显示
    window.onscroll = () => {
      console.log('111')
      if ((document.documentElement.scrollTop || document.body.scrollTop) > 30) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  }
})
export default {
  data () {
    return {
      filmInfo: '',
      isHidden: true /* true: 为默认未下拉, false为默认下拉 */
    }
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader
  },
  created () {
    console.log('id:', this.$route.params.id)

    // axios 利用id 发送请求到详情接口，获取详细数据，布局页面

    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=7284377`,
      // url: `/gateway?filmId=${this.$route.params.id}&k=7284377`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      console.log(res.data.data.film)
      this.filmInfo = res.data.data.film
    })
  }
}
</script>
<style lang="scss" scoped>
img {
  float: left;
  width: 100%;
  height: 210px;
}

.poster {
  width: 100%;
  height: 13.125rem;
  background-size: cover;
  background-position: center;
}

.content {
  padding: 15px;
  background-color: #fff;

  .filmInfoname {
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
  }
  .detail-text{
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
}
.hidden{
  overflow: hidden;
  height: 30px;
}
.icon-jiantoushang{ // 设置下拉后的图标颜色
  color: red;
}
.icon-jiantouxia{
  color: #cccc;
}
.avatar{
  height: 5.3125rem;
  width: 100%;
  background-size: cover;
  background-position: center;
}

}
.yanzi{
  margin-top: 10px !important;
    background-color: #fff;
    padding: 15px;
    .dataname{
  text-align: center;
  padding-top: 10px;
    font-size: 12px;
    color: #191a1b;
    width: 85px;
    height: 18px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.datarole{
  text-align:center;
  font-size: 10px;
    color: #797d82;
}
}
.avatar{
  height: 5.3125rem;
  width: 100%;
  background-size: cover;
  background-position: center;
}
.jvzao{
  margin-top: 10px !important;
    background-color: #fff;
    padding: 15px;
    .dataname{
  text-align: center;
  padding-top: 10px;
    font-size: 12px;
    color: #191a1b;
    width: 85px;
    height: 18px;
    display: block;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
}
.detailheader{
  display: block;
    position: fixed;
    text-align: center;
    width: 100%;
    line-height: 2.75rem;
    height: 2.75rem;
    background-color: white;
}
</style>
