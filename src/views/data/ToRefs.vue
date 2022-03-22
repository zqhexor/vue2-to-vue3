<template>
  <div>
    <h3>reactive</h3>
    <p>name: {{ person.name }}</p>
    <p>age: {{ person.age }}</p>
    <button @click="changeAge">改变年龄Reactive</button>
    <h3>直接解构----失去响应式</h3>
    <p>name: {{ name1 }}</p>
    <p>age: {{ age1 }}</p>
    <h3>toRef解构----延续响应式</h3>
    <p>name: {{ nameRef }}</p>
    <p>age: {{ ageRef }}</p>
    <button @click="changeAgeRef">改变toRef解构的年龄</button>

  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'

const person = reactive({ name: '小松菜奈', age: 20 })

const {name: name1, age: age1} = person // 直接解构----失去响应式

const {name: nameRef, age: ageRef} = toRefs(person) // toRef解构----延续响应式
const changeAge = () => {
  person.age += 1
}
const changeAgeRef = () => {
  ageRef.value += 1
}
</script>
