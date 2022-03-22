<template>
  <div>
    <p>name: {{ personRef.name }}</p>
    <p ref="ageRef">age: {{ personRef.age }}</p>
    <button @click="changeAge">改变年龄</button>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const personRef = ref({ name: '小松菜奈', age: 20 })
console.log(personRef)
const changeAge = () => {
  personRef.value.age += 1
}

const ageRef = ref(null)
onMounted(() => {
  console.log(ageRef.value) // 获取dom，相当于vue2原来的this.$refs.ageRef
})

</script>
