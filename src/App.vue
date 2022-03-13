<template>
  <div class="container">
    <ul class="aside">
      <router-link v-for="item in menuList" :to="item.path" :key="item.name" >{{ item.meta.title }}</router-link>
    </ul>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
  import {useRouter} from 'vue-router'
  const router = useRouter()
  const menuList = router.options.routes

</script>

<style>
.container {
  display: flex;
  overflow: auto;
  width: 100vw;
  height: 100vh;
}
.aside {
  flex: none;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 200px;
}
.aside a {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
}
.main {
  flex: auto;
  padding: 10px;
  border-left: 1px solid #F5F5F5;
}
</style>
