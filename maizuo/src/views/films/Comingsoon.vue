<!-- 主页即将上映详情-->
<template>
    <div>
        <!-- Nowplaying -->
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
                  <img :src="data.poster">
                <div class="centermenu">
                  <div class="title">{{ data.name }}</div>
                  <div class="pingfen" :class="data.grade?'':'hidden'"><p>观众评分：<a>{{ data.grade }}</a></p></div> <!--:class="data.grade?'':'hidden'" @如果没有观众评分则不显示观众评分栏-->
                  <div class="zhuyan">主演：{{ data.actors | actorsFilter }}</div>
                  <div></div>
                  <div class="time">{{ data.nation}}&nbsp;|&nbsp;{{ data.runtime }}分钟</div>
                </div>
                </li>
        </ul>
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
      datalist: []
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
ul{
  li{
    overflow: hidden;
    padding: 15px 15px 15px 0;
    height: 5.8125rem;
    .centermenu{
      height: 93px;
    width: 220px;
    float: left;
    margin-left: 10px;
    padding-top: 5px;
    .zhuyan{
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
    .zhuyan{
      font-size: 13px;
      color: #797d82;
    }
  }
}
.hidden{
  visibility: hidden;
}
</style>
