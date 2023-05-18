<script setup lang="ts">
import type { Ref } from 'vue'

const rangeInputRef = ref() as Ref<HTMLInputElement>
const volume = ref('25')
</script>

<template>
  <div class="wrapper">
    <i-material-symbols-4k-plus-rounded />
    <section>
      <span>{{ volume }}</span>
      <input ref="rangeInputRef" v-model="volume" type="range" min="0" max="100">
    </section>
  </div>
</template>

<style scoped lang="scss">
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
        gap: 70px;

        span {
            color: #867372;
        }
    }

    section span {
        font-size: 68px;
    }

    section span::after {
        content: "%";
    }

    input[type="range"] {
        width: 300px;

        // chrome
        /*
         ::-webkit-slider-runnable-track
         修改轨道伪元素
         */
        &::-webkit-slider-container {
            background-color: salmon;
        }

        /*
         ::-webkit-slider-runnable-track
         修改轨道伪元素
         */
        &::-webkit-slider-runnable-track {
        }

        /*
         ::-webkit-slider-thumb
         修改滑块伪元素
         */
        &::-webkit-slider-thumb {
            background-color: salmon;
        }

        // firefox
        &::-moz-range-progress {
            height: 20px;
            border-radius: 10px;
            background-color: salmon;
        }

        &::-moz-range-track {
            height: 20px;
            border-radius: 10px;
            background-color: seagreen;
        }

        &::-moz-range-thumb {
            background-color: black;
        }
    }
</style>
