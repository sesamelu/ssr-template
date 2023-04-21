<script setup lang="ts">
  import {useRouter} from 'vue-router'
  import { getCurrentInstance, h } from 'vue'
  // import { ElMessage } from 'element-plus'

  const router = useRouter()
  //声明上下文
  const {proxy}:any = getCurrentInstance()
  const open = () => {
    proxy.$message('this is a message.')
  }
</script>

<template>
  <div>
    <el-button type="primary" @click="open">Primary</el-button>
    <button @click="()=>router.push({path:'/home'})">首页</button>
    <button @click="()=>router.push({path:'/mine'})">个人中心</button>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
