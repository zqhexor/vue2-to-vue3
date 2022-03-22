<template>
  <div class="container">
    <ul class="aside">
      <n-menu :options="menuList" :indent="20" @update:value="handleUpdateMenu" />
    </ul>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
  import {NMenu} from 'naive-ui'
  import {computed} from 'vue'
  import {useRouter} from 'vue-router'

  const router = useRouter()
  const menuList = computed(() => {
    const menus = []
    const routers = router.options.routes
    routers.forEach((item) => {
      const menu = {
        label: item.meta.title,
        key: item.path
      }
      if (item.children) {
        menu.children = []
        item.children.forEach((subItem) => {
          const subMenu = {
            label: subItem.meta.title,
            key: `${item.path}/${subItem.path}`
          }
          menu.children.push(subMenu)
        })
      }
      menus.push(menu)
    })
    return menus
  })

  function handleUpdateMenu(key) {
    router.push({path: key})
  }

</script>

<style>
  .container {
    display: flex;
    overflow: auto;
    width: 100vw;
    height: 100vh;
  }

  .aside {
    flex: none;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: 200px;
  }

  .aside a {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
  }

  .main {
    flex: auto;
    padding: 10px;
    border-left: 1px solid #F5F5F5;
  }
</style>
