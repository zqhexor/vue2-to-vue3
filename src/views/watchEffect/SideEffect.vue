<template>
  <div>
    <button class="btn">按钮</button>
    <br>
    params: {{params}}
    <br>
    count: {{count}}
    <br>
    <button @click="change1">按钮1</button>
    <button @click="change2">按钮2</button>
  </div>
</template>

<script setup>
  import {watchEffect, ref, onMounted} from 'vue'

  watchEffect((onInvalidate) => {
    const timer = setInterval(() => {
      // ...
    }, 1000)
    onInvalidate(() => clearInterval(timer))
  })

  const handleClick = () => {
   // ...
  }
  onMounted(()=>{
    watchEffect((onInvalidate) => {
      document.querySelector('.btn').addEventListener('click', handleClick, false)
      onInvalidate(() => document.querySelector('.btn').removeEventListener('click', handleClick))
    })
  })


  const params = ref(1)
  let count = ref([])

  const getList=(params)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve([6,7,8])
      },1000)
    })
  }

  watchEffect( async (onInvalidate )=>{
   const res = await getList(params.value)
    count.value = res
    onInvalidate (()=>{
      console.log(111)
      count.value =[]
    })
  })
  const change1 = () => {
    params.value ++
  }
  const change2 = () => {
    count.value = [22]
  }
</script>
