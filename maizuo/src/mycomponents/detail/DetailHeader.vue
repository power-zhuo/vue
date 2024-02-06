<!--电影详情头部header-->
<template>
    <div class="header">
        <i class="iconfont icon-fanhui" @click="fanhui"></i>
        <slot></slot>
    </div>
</template>
<script>
export default {
  methods: {
    fanhui () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
// .header{
//     display: block;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 2.75rem;
//     line-height: 2.75rem;
//     background-color: white;
//     text-align: center;
// }
.iconfont{
    height: 30px;
    position: absolute;
    // top: 5px;
    left: 5px;
}
</style>
