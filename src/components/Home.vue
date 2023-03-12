<script setup lang="ts">
  const menu = ref(['checkBrowser', 'volumeBar', 'tabBar', 'marqueeDiv', 'learnSCSS', 'weather'])

</script>

<template>
  <div class="wrapper">
    <aside>
      <router-link to="/">
        <h2>Learn CSS</h2>
      </router-link>
      <div class="link-list">
        <router-link v-for="(name,index) in menu"
                     :key=index
                     :to="{name}">
          {{ name }}
        </router-link>
      </div>
    </aside>
    <main>
      <!-- router-view 搭配 transition 写法 -->
      <transition>
        <router-view v-slot="{Component}">
          <component :is="Component" />
        </router-view>
      </transition>
    </main>
  </div>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .wrapper {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;

    height: 100vh;
    border-radius: 10px;
  }

  aside {
    background-color: #dcc7c4;
    flex: 0 0 150px;
    padding: 15px;
  }

  .link-list {
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .link-list a {
    background-color: cornflowerblue;
    border-radius: 6px;
    padding: 4px;
  }

  main {
    flex: 1 0 auto;

    padding: 15px;
  }
</style>
