<template>
  <button @click="clickFn">{{ name }}</button>
</template>

<script>
  export default {
    name: '选项式API测试组件',
    props: {},
    components: {},
    data() {
      return {
        name: '选项式API测试组件'
      }
    },
    watch: {},
    computed: {},
    methods: {
      clickFn() {
        console.log('测试组件')
      }
    },
    created() {},
    mounted() {}
  }
</script>
