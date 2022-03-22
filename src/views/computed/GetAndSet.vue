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
  const fullName = computed({
    get: () => firstName.value + ' ' + lastName.value,
    set: (val) => {
     const name = val.split(' ')
      firstName.value = name[0]
      lastName.value = name[1]
    }
  })
  console.log(fullName.value) // Taylor Swift

  function changeFullName() {
    fullName.value =  'Taylor Momsen'
  }

</script>
