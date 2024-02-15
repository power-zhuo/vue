<!-- 首页轮播设置 -->
<template>
  <div>
      <!-- <film-swiper :key="datalist.length">
        <film-swiper-item v-for="data in datalist"  :key="data.filmId" class="filmswiperitem">
        <img :src="data.poster">
        </film-swiper-item>
      </film-swiper> -->
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="data in datalist" :key="data.filmId">
          <img :src="data.poster" />
        </van-swipe-item>
      </van-swipe>

      <film-header  class="sticky"></film-header>
      <router-view></router-view>
  </div>
</template>
<script>
// import filmSwiper from '@/mycomponents/films/FilmSwiper'
import filmHeader from '@/mycomponents/films/FilmHeader'
// import filmSwiperItem from '@/mycomponents/films/FilmSwiperItem'
import http from '@/util/http'
// import axios from 'axios'
export default {
  setup () {
    const images = [
    ]
    return { images }
  },
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    http({
      url: '/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7284377',
      // url: '/wuhu.json',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  },
  // mounted () {
  //   // setTimeout(() => {
  //   //   this.datalist = ['111', '222', '333']
  //   // }, 1000)
  //   axios.get('/wuhu.json').then(res => {
  //     console.log(res.data)
  //     this.datalist = res.data.data.films
  //   })
  // },
  components: {
    // filmSwiper,
    // filmSwiperItem,
    filmHeader
  }
}
</script>
<style lang="scss" scoped>
.wuhu {
  overflow: hidden;
  color: black;
}
.sticky{
  position: sticky;
  top: 0px;
  background-color: white;
  z-index: 666;
}

  img {
    width: 100%;
    height:12.5rem;
  }

</style>
