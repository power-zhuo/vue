<template>
  <div>
    <tabbar></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import tabbar from '@/mycomponents/Tabbar'
Vue.use(Vant)
export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  }
}
</script>
<style lang="scss">
*{
  margin: 0 ;
  padding: 0;
}
html,body{
  background-color: #F4F4F4;
  height: 100%;
}
section{
  padding-bottom:3.0625rem ;
}
ul{
  list-style: none;
}
</style>
