<template>
  <p>firstName: {{firstName}} </p>
  <p>lastName: {{lastName}} </p>
  <hr>
  <p>computed---fullName:{{fullName}}</p>
  <button @click="changeFullName">改变fullName</button>
</template>

<script setup>
  import { ref, computed } from 'vue'

  const firstName = ref('Taylor')
  const lastName = ref('Swift')
  const fullName = computed(() => firstName.value + ' ' + lastName.value)
  console.log(fullName.value) // Taylor Swift

  function changeFullName() {
    fullName.value =  'Taylor Momsen' // 错误
  }

</script>
