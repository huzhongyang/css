<script lang='ts' setup>
  import { computed } from 'vue'
  import { $ref } from 'vue/macros'

  let searchCity = $ref('')
  const clearInputHidden = computed(() => {
    return searchCity === ''
  })
  const searchCityRef = $ref<HTMLInputElement>()
  let citys = $ref<string[]>()
  let citysDivVisited = $ref(false)

  function getWeather() {
    console.log(searchCity)
  }

  function clearInput() {
    searchCity = ''
    searchCityRef!.focus()
  }

  onMounted(() => {
    searchCityRef!.focus()
  })
</script>

<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <h1>查询城市天气</h1>
    <div class="flex">
      <div class="relative flex items-center">
        <label for="weather"></label>
        <input v-model="searchCity"
               ref="searchCityRef"
               type="text" name="weather" id="weather" placeholder="请输入城市"
               class="w-[250px] h-8 rounded p-2.5 text-lg">
        <button @click="clearInput"
                class="clear" :hidden="clearInputHidden">清空
        </button>
      </div>
      <button @click="getWeather"
              class="bg-blue-200 h-8 px-2 py-1 rounded ml-2">查询
      </button>
    </div>
    <div v-if="citysDivVisited">
      <span v-for="city in citys">{{ city }}</span>
    </div>
  </div>
</template>

<style scoped>
  .clear {
    position: absolute;
    right: 10px;
  }
</style>
