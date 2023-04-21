<script setup lang="ts">
  import {useRouter} from 'vue-router'
  const router = useRouter()

</script>

<template>
  <div>
    <button @click="()=>router.push({path:'/home'})">首页</button>
    <button @click="()=>router.push({path:'/mine'})">个人中心</button>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
