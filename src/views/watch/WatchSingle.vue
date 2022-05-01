<template>
  <div>
    <p>name: {{ person.name }}</p>
    <p>age: {{ ageRef }}</p>
    <button @click="changeAge">改变年龄</button>
  </div>
</template>

<script setup>
  import { watch, ref, reactive } from 'vue'
  // 侦听一个 getter
  const person = reactive({name: '小松菜奈'})
  watch(
    () => person.name,
    (value, oldValue) => {
      console.log(value, oldValue)
    }, {immediate:true}
  )
  person.name = '有村架纯'

  // 直接侦听ref
  const ageRef = ref(16)
  const stopAgeWatcher = watch(ageRef, (value, oldValue) => {
    console.log(value, oldValue)
    if (value > 18) {
      stopAgeWatcher() // 当ageRef大于18，停止侦听
    }
  })

  const changeAge = () => {
    ageRef.value += 1
  }
</script>
