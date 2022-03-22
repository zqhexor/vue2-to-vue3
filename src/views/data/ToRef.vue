<template>
  <div>
    <h3>reactive</h3>
    <p>name: {{ person.name }}</p>
    <p>age: {{ person.age }}</p>
    <button @click="changeAge">改变年龄</button>
    <h3>toRef</h3>
    <p><strong>toRef</strong>--ageRef: {{ ageRef }}</p>
    <button @click="changeAgeRef">toRef改变年龄</button>
    <h3>toRef</h3>
    <p><strong>level属性不存在，toRef生成levelRef:</strong> {{ levelRef }}</p>
    <p><strong>通过person.level渲染的数据:</strong> {{ person.level }}</p>
    <button @click="changeLevelRef">改变level</button>

  </div>
</template>

<script setup>
import { reactive, toRef } from 'vue'

const person = reactive({ name: '小松菜奈', age: 20 })
const changeAge = () => {
  person.age += 1
}
const ageRef = toRef(person, 'age')
const changeAgeRef = () => {
  ageRef.value += 1
}

const levelRef = toRef(person, 'level') // level不存在，通过toRef生成的ref具备响应式
levelRef.value = 0
const changeLevelRef = () => {
  levelRef.value += 1
}
</script>
