<script lang='ts' setup>
  import { computed } from 'vue'
  import { $ref } from 'vue/macros'
  import { City, getCitys } from '../../api'

  let searchCity = $ref('')
  const clearInputHidden = computed(() => searchCity === '')
  const searchCityRef = $ref<HTMLInputElement>()
  let citys = $ref<City[]>([])
  let citysDivVisited = computed(() => citys?.length !== 0)

  function getWeather() {
    console.log(searchCity)
  }

  function clearInput() {
    searchCity = ''
    citys = []
    searchCityRef!.focus()
  }

  onMounted(() => {
    searchCityRef!.focus()
    searchCityRef!.addEventListener('change', async () => {
      citys = await getCitys(searchCity) ?? []
    })
  })
</script>

<template>
  <div class="w-full h-full flex items-center flex-col">
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
    <div v-show="citysDivVisited"
         class="relative top-1 left-[-28px] w-[250px] h-[200px] overflow-scroll flex flex-col
                border border-solid p-1.5 rounded">
      <span v-for="city in citys">{{ city.country + ' - ' + city.name }}</span>
    </div>
  </div>
</template>

<style scoped>
  .clear {
    position: absolute;
    right: 10px;
  }
</style>
