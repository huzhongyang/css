<script lang="ts" setup>

</script>

<template>
  <div class="h-full w-full flex justify-center items-center">
    <div class="w-[50px] h-[50px] animate border border-solid border-amber-600" />
    <div class="test-mask" />
  </div>
</template>

<style lang="scss" scoped>
  .test-mask {
    width: 100px;
    height: 100px;
    background: conic-gradient(from 45deg,
      #2196f3 25%,
      #f44336 0 50%,
      #4caf50 0 75%,
      #ffc107 0
    );
    mask: radial-gradient(50% 50%, #000 96%, #0000) left/35% 35% no-repeat;
  }

  .animate {
    animation: rotate 4s ease-in-out infinite;
    background: conic-gradient(from 45deg,
      #2196f3 25%,
      #f44336 0 50%,
      #4caf50 0 75%,
      #ffc107 0
    );
    mask: radial-gradient(50% 50%, #000 96%, #0000) left/35% 35% no-repeat;
  }

  @keyframes rotate {
    0% {
      mask-position: top;
    }
    25% {
      mask-position: right;
    }
    50% {
      mask-position: bottom;
    }
    75% {
      mask-position: left;
    }
    100% {
      mask-position: top;
    }
  }
</style>
