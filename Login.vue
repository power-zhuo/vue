<template>
    <div>
        login
        <button @click="handleLogin">登录</button>
    </div>
</template>
<script>
export default {
  methods: {
    handleLogin () {
      setTimeout(() => {
        localStorage.setItem('token', '后端传回来的token字段')
        // this.$rounter.back()
        this.$router.push('/center')
      }, 0)
    }
  }
}
</script>
