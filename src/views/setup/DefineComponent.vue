<template>
  <div>
    <div>{{ message }}</div>
    <test></test>
  </div>
</template>

<script>
  import { defineComponent, onBeforeMount, ref } from 'vue'
  import test from './components/test.vue'
  export default defineComponent({
    name: 'DefineComponent',
    components: {
      test
    },
    setup(props, context) {
      console.log(props, context)
      const message = ref('setup选项')
      onBeforeMount(()=>{
        console.log('---onBeforeMount--')
      })
      return {
        message
      }
    }
  })
</script>
