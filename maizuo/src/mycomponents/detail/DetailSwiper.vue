<!-- 详情轮播页面-->
<template>
    <div class="swiper-container " :class="name">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!--有bug-->
    </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  props: {
    perview: {
      type: Number, // 接受数字类型
      default: 1
    },
    name: {
      type: String,
      default: 'wuhu'
    }
  },
  // 修改 FilmSwiper.vue 中的 mounted 方法
  mounted () {
    new Swiper('.' + this.name, {
      slidesPerView: this.perview, // 显示多少个
      spaceBetween: 15, // 每个swipe了之间的间隔
      freeMode: true
      // dirertion:"iertical",//垂直轮播
      // 分页器
    //   pagination: {
    //     el: '.swiper-pagination'
    //   },
    //   loop: this.loop,
    //   autoplay: { // 自动轮播
    //     delay: 2000,
    //     disableOnInteraction: false
    //   }
    })
  }
}
</script>
<style lang="scss" scoped>
.photos,.actors{
    overflow: hidden;
}
.swiper-slide{
  width: 100%;
  height: 200px;
}
.swiper-wrapper{
    margin-top: 15px;
    width: 100%;
    height: 130px;
}
</style>
