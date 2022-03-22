<template>
  <div>
    <h3>reactive</h3>
    <p>name: {{ person.name }}</p>
    <p>age: {{ person.age }}</p>
    <h3>ref</h3>
    <p>count: {{ count }}</p>
    <button @click="changeAgeRef">改变countRef</button>
    <h3>ref被reactive解包后的取值</h3>
    <p>count: {{ countReactive.count }}</p>
    <button @click="changeAgeReactive">改变countReactive</button>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const person = reactive({ name: '小松菜奈', age: 20 })

const count = ref(0)

const countReactive = reactive({ count }) // reactive 直接解包refs
// const countReactive = reactive({})
// countReactive.count = count // ref分配给 reactive property

console.log(countReactive.count === count.value)  // true
const changeAgeRef = () => {
  count.value += 1
}
const changeAgeReactive = () => {
  countReactive.count += 1
}
</script>
