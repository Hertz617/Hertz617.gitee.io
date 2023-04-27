<template>
  <!-- <MyComponent></MyComponent>
  <RouterLink to="/">首页</RouterLink>
  <RouterLink to="/user">用户中心</RouterLink>
  <RouterLink to="/login">登录</RouterLink>
  <RouterLink to="/object">object</RouterLink>
  <RouterLink to="/shop">商店</RouterLink>
  <RouterLink to="/cart">购物车</RouterLink>
  <button @click="tojump"> 跳转页面</button> -->
  <div>
    <!-- 页面组件的占位 iframe-->
    <RouterView name="Header"></RouterView>
    <RouterView></RouterView>
    <RouterView name="Footer"></RouterView>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({

  methods:{
    tojump(){
      // push,replace不可回退
      this.$router.push('/user')
    }
  }
});
</script>
<style lang='scss' scoped></style>