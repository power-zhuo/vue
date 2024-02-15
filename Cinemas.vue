<template>
  <div>
    <van-nav-bar title="影院" ref="navbar">
      <template #left>
        茂名<van-icon name="arrow-down"  color="black"/>
      </template>
      <template #right>
        <van-icon name="search" size="18" color="black"/>
      </template>
    </van-nav-bar>

    <div class="cinema_list" :style="{
      height:height
    }">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaID">
          <!-- {{ data.name }}
                {{ data.address }} -->
          <div class="left">
            <div class="cinema_name">{{ data.name }}</div>
            <div class="cinema_address">{{ data.address }}</div>
          </div>
          <div class="right cinema_name">
            <div class="Price">
              ￥{{ data.lowPrice / 100 }}起
            </div><!-- 价格 -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import http from '@/util/http'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      cinemaList: [],
      height: '0px'
    }
  },
  mounted () {
    // 获取屏幕高度减去顶部和底部的高度来设置高度
    this.height = document.documentElement.clientHeight - this.$refs.navbar.$el.offsetHeight - document.querySelector('footer').offsetHeight + 'px'
    //
    http({
      url: '/gateway?cityId=440900&ticketFlag=1&k=657713',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      //   console.log(res)
      this.cinemaList = res.data.data.cinemas
      this.$nextTick(() => {
        new BetterScroll('.cinema_list', {
          scrollbar: {
            fade: true
          }
        })
      })
    })
  }
}
</script>
<style lang="scss" scoped>
li {
  padding: 0.9375rem;
  display: flex;
  justify-content: space-between;

  .left {
    width: 13.125rem;
  }

  .cinema_name {
    font-size: 15px;
  }

  .cinema_address {
    //超过left的宽度，隐藏显示3个点
    color: #7A93B6;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .right {
    width: 4.375rem;
    text-align: center;
  }

  .Price {
    color: #ED6A32;
  }
}

.cinema_list {
  //height:calc(100vh - 3.0625rem);动态计算高度
  overflow: hidden;
  position: relative;
}
</style>
