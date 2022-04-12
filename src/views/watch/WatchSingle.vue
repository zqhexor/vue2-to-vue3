<template>
  <div>
    <h3>reactive</h3>
    <!--<p>name: {{ person.name }}</p>-->
    <!--<p>age: {{ person.age }}</p>-->
    <button @click="changeAge">改变年龄Reactive</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const person = ref({ name:'xx', age:123 })

const changeAge = () => {
  person.value.age = {dog: '222'}
}

watch(()=>{return {...person.value}} , (val, oldVal) => {
  console.log('val', val)
  console.log('oldVal', oldVal)
})
</script>
