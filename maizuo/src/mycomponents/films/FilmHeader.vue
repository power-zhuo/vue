<!--主页顶部导航 -->
<template>
    <div>
        <ul>
        <router-link to="/films/nowplaying" custom v-slot="{navigate,isActive}">
            <li @click="navigate" >
                <a :class="isActive?'wuhu':''">正在热映</a>
            </li>
          </router-link>

          <router-link to="/films/comingsoon" custom v-slot="{navigate,isActive}">
            <li @click="navigate">
                <a :class="isActive?'wuhu':''">即将上映</a>
            </li>
          </router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
ul{
    display: flex;
    height: 3.0625rem;
    line-height: 3.0625rem;
    li{
        flex: 1;
        text-align: center;
    }
}
.wuhu{
    color: red;
    border-bottom: 2px solid red;
}
</style>
