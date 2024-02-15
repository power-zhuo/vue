<!-- 主页正在热映详情-->
<template>
  <div>
      <!-- Nowplaying -->
      <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
      >
          <van-cell v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
                <img :src="data.poster">
              <div class="centermenu">
                <div class="title">{{ data.name }}</div><!--电影名称-->
                <div class="releasetime">上映时间：{{ data.premiereAt | dateFilter }}</div><!--上映时间  -->
                <div class="category">{{ data.category}} </div><!--电影类型-->
                <div class="starring">主演：{{ data.actors | actorsFilter }}</div> <!--主演-->
                <div></div>
                <div class="time">{{ data.nation}}&nbsp;|&nbsp;{{ data.runtime }}分钟</div> <!--电影时长-->
              </div>
              </van-cell>
      </van-list>
  </div>
</template>
<script>
// import axios from 'axios'
import http from '@/util/http'
import Vue from 'vue'

Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return '没有主演'
  // console.log(data.map(item => item.name).join(''))
  return data.map(item => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      pagenum: 1
    }
  },
  mounted () {
    http({
      url: '/gateway?cityId=440900&pageNum=1&pageSize=10&type=2&k=1860618',
      // url: '/wuhu.json',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    onLoad () {
      console.log('加载')
      this.pagenum++
      http({
        url: `/gateway?cityId=440900&pageNum=${this.pagenum}&pageSize=10&type=2&k=1860618`,
        // url: '/wuhu.json',
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
      // console.log(res.data.data.films)
      // this.datalist = res.data.data.films
        this.datalist = [...this.datalist, ...res.data.data.films]
        // 将loading 状态设置为false，加载完成
        this.loading = false
        // 判断是否还有更多数据
        if (res.data.data.films.length === 0) {
          this.finished = true
        }
      })
    },
    handleChangePage (id) {
      console.log(id)
      // 编程式导航栏

      // 通过路径跳转
      // this.$router.push(`/detail/${id}`)

      // 通过命名路由跳转
      this.$router.push({
        name: 'wuhu',
        params: {
          id
        }
      })
    // // axios 利用 id 发请求到详情接口，获取详情数据，布局页面
    }
  }
}
</script>
<style lang="scss" scoped>
.van-list{
.van-cell{
  overflow: hidden;
  /*padding: 15px 15px 15px 0;
  height: 5.8125rem;*/
  .centermenu{
    height: 93px;
  width: 220px;
  float: left;
  margin-left: 10px;
  padding-top: 5px;
  .starring{
    overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  }
  }
  img{
    width: 4.125rem;
    float: left;
  }
  .title{
    font-size: 16px;
  }
  .pingfen{
    p{
      color: #7A7D81;
      font-size: 13px;
    }
    a{
      color: #F4B54E;
    }
  }
  .time{
    font-size: 13px;
  margin-top: 4px;
  color: #797d82;
  }
  .starring{
    font-size: 13px;
    color: #797d82;
  }
  .releasetime {
    font-size: 13px;
    color: #797d82;
  }
  .category{
    font-size: 13px;
    color: #797d82;
  }
}
}
.hidden{
visibility: hidden;
}
</style>
