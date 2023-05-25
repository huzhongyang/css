<!--
 created by: zy
 created at: 2023/05/18 13:45
 description: 生成梅花动画
 -->
<script lang="ts" setup>
const cvRef = ref<HTMLCanvasElement>()
</script>

<template>
  <div class="h-full flex flex-col justify-center items-center gap-10">
    <h1 class="font-bold">
      Generate plum blossom animation
    </h1>
    <canvas
      ref="cvRef"
      class="w-[40%] h-4/5 border border-solid border-amber-300"
    />
  </div>
</template>

<style scoped>

</style>
