<template>
  <div class="watch-test">
    <div>name：{{name}}</div>
    <div>age：{{age}}</div>
  </div>
  <div>
    <button @click="change1">同时改变年龄和名字，触发一次</button>
    <button @click="change2">同时改变年龄和名字，利用nextTick触发两次</button>
  </div>
</template>

<script setup>
  import {ref, watch, nextTick} from 'vue'

  const name = ref('小松菜奈')
  const age = ref(25)

  watch([name, age], ([name, age], [prevName, prevAge]) => {
    console.log('newName', name, 'oldName', prevName)
    console.log('newAge', age, 'oldAge', prevAge)
  })

  // 如果你在同一个函数里同时改变这些被侦听的来源，侦听器只会执行一次
  const change1 = () => {
    name.value = '有村架纯'
    age.value += 2
  }

  // 用 nextTick 等待侦听器在下一步改变之前运行,侦听器执行了两次
  const change2 = async () => {
    name.value = '新垣结衣'
    await nextTick()
    age.value += 2
  }
</script>
