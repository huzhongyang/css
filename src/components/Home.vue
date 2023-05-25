<script lang="ts" setup>
const menu = ref(
  ['checkBrowser', 'volumeBar', 'tabBar', 'marqueeDiv', 'learnSCSS', 'weather', 'vrView', 'plumBlossom', 'zLoading',
  ])
</script>

<template>
  <div class="wrapper">
    <aside>
      <router-link to="/">
        <h2 class="w-full text-center text-[40px]">
          {{ `💡🤔️` }}
        </h2>
      </router-link>
      <div class="link-list">
        <router-link
          v-for="(name, index) in menu"
          :key="index"
          :to="{ name }"
        >
          {{ name }}
        </router-link>
      </div>
    </aside>
    <main>
      <!-- router-view 搭配 transition 写法 -->

      <router-view v-slot="{ Component, route }">
        <transition mode="out-in" name="fade">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
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
    width: 100vw;
    height: 100vh;

    border-radius: 10px;
    gap: 10px;
  }

  aside {
    flex: 0 0 150px;
    padding: 15px;
    background-color: #dcc7c4;
  }

  .link-list {
    display: flex;
    overflow-y: scroll;
    flex-flow: column nowrap;
    max-height: calc(100vh - 100px);
    gap: 5px;
  }

  a {
    text-decoration: none;
    text-indent: 5px;
    color: black;
  }

  .link-list a {
    padding: 4px;
    border-radius: 6px;
    background-color: cornflowerblue;
  }

  main {
    flex: 1 1 calc(100vw - 150px);
    padding: 10px;
  }
</style>
