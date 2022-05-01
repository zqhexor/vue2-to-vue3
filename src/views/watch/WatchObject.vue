<template>
  <div class="watch-test">
    <div>ref定义数组：{{arrayRef}}</div>
    <div>reactive定义数组：{{arrayReactive}}</div>
  </div>
  <div>
    <button @click="changeArrayRef">改变ref定义数组第一项</button>
    <button @click="changeArrayReactive">改变reactive定义数组第一项</button>
  </div>
</template>

<script setup>
  import {ref, reactive, watch} from 'vue'

  const arrayRef = ref([1, 2, 3, 4])
  const arrayReactive = reactive([1, 2, 3, 4])

  // ref not deep, 不能深度侦听
  const arrayRefWatch = watch(arrayRef, (newValue, oldValue) => {
    console.log('newArrayRefWatch', newValue, 'oldArrayRefWatch', oldValue)
  })

  // ref deep， 深度侦听，新旧值一样
  const arrayRefDeepWatch = watch(arrayRef, (newValue, oldValue) => {
    console.log('newArrayRefDeepWatch', newValue, 'oldArrayRefDeepWatch', oldValue)
  }, {deep: true})

  // ref deep, getter形式 ， 新旧值不一样
  const arrayRefDeepGetterWatch = watch(() => [...arrayRef.value], (newValue, oldValue) => {
    console.log('newArrayRefDeepGetterWatch', newValue, 'oldArrayRefDeepGetterWatch', oldValue)
  })

  // reactive，默认深度监听，可以不设置deep:true, 新旧值一样
  const arrayReactiveWatch = watch(arrayReactive, (newValue, oldValue) => {
    console.log('newArrayReactiveWatch', newValue, 'oldArrayReactiveWatch', oldValue)
  })

  // reactive，getter形式 ， 新旧值不一样
  const arrayReactiveGetterWatch = watch(() => [...arrayReactive], (newValue, oldValue) => {
    console.log('newArrayReactiveFuncWatch', newValue, 'oldArrayReactiveFuncWatch', oldValue)
  })

  const changeArrayRef = () => {
    arrayRef.value[0] = 3
  }
  const changeArrayReactive = () => {
    arrayReactive[0] = 6
  }
</script>
