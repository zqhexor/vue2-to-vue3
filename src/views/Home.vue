<template>
  <div class="pages-common">
    <h1>{{ route.meta.title }}</h1>
    <router-view/>
  </div>
</template>

<script setup>
  import {useRoute} from 'vue-router'
  const route = useRoute()
</script>

<style scoped>

</style>
