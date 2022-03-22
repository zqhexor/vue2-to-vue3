<template>
  <div>
    <div>{{ message }}</div>
    <test></test>
  </div>
</template>
<script>
 export default {
   name: 'ScriptSetup'
 }
</script>
<script setup>
  import { ref, onBeforeMount } from 'vue'
  import test from './components/test.vue'
  const message = ref('script setup语法糖')
  onBeforeMount(()=>{
    console.log('---onBeforeMount--')
  })
</script>
