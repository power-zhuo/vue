<!-- 主页轮播轮播页面-->
<template>
    <div class="swiper-container wuhu">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        <!--有bug-->
    </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  // 修改 FilmSwiper.vue 中的 mounted 方法
  mounted () {
    new Swiper(this.$el, {
      // dirertion:"iertical",//垂直轮播
      // 分页器
      pagination: {
        el: '.swiper-pagination'
      },
      loop: this.loop,
      autoplay: { // 自动轮播
        delay: 2000,
        disableOnInteraction: false
      }
    })
  }
}
</script>
<style lang="scss" scoped>

.swiper-slide{
  width: 100%;
  height: 210px;
}
</style>
