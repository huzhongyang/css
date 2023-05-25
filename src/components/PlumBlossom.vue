<!--
 created by: zy
 created at: 2023/05/18 13:45
 description: 生成梅花动画
 -->

<script lang="ts" setup>
const cvRef = ref<HTMLCanvasElement>()
</script>

<template>
  <div>
    <h1>generate plum blossom animation</h1>
    <canvas ref="cvRef" class="w-[400px] h-[400px] border border-solid border-amber-300" />
  </div>
</template>

<style scoped>

</style>
