<!--主页底部导航栏 -->
<template>
    <footer>
      <ul>
        <!--rounter声明导航
          <router-link to="/Films" active-class="wuhu" tag="li">1</router-link  active-class 自定义路由选择时的名字
            // 动态切换
          <router-link to="/Cinemas"  active-class="wuhu" tag="li">2</router-link> tag可以将原始标签渲染成tag设置的值
            ，例如tag="就是将rounter-link设置成li标签"
            tag在vue4之后弃用
          <router-link to="/Center"  active-class="wuhu" tag="li">3</router-link> -->
          <!--rounter声明导航结束-->
          <!--vue4以后的写法-->
          <router-link to="/films" custom v-slot="{navigate,isActive}">
            <li @click="navigate" :class="isActive?'wuhu':''"><i class="iconfont icon-shouye"></i>
                <a>电影</a>
            </li>
          </router-link>
          <router-link to="/cinemas" custom v-slot="{navigate,isActive}">
            <li @click="navigate" :class="isActive?'wuhu':''"><i class="iconfont icon-bofang"></i>
                <a>影院</a>
            </li>
            <!--  :class="isActive?'wuhu':''" ,,如果class为isActiive则传参wuhu反之为空 -->
          </router-link>
          <router-link to="/center" custom v-slot="{navigate,isActive}">
            <li @click="navigate" :class="isActive?'wuhu':''"><i class="iconfont icon-wode "></i>
                <a>我的</a>
            </li>
          </router-link>
      </ul>
      </footer>
  </template>
<script>
import '../assets/iconfont/iconfont.css'
export default {

}
</script>
  <style lang="scss" scoped>
  footer{
    z-index: 666;
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.0625rem;
    background:white;
    .wuhu{
        color: red;
    }
    ul{
        display: flex;
        li{
            flex: 1;
            line-height: 1.5313rem;
            text-align: center;
            display: flex;
            text-decoration: none;
            color: black;
            flex-direction: column;
            i{
                font-size: 20px;
            }
            a{
                font-size: 16px;
                text-decoration: none;
            }
        }
    }
  }

  </style>
