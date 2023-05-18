<script lang='ts' setup>
  import { computed } from 'vue'
  import { $ref } from 'vue/macros'
  import { City, getCitys } from '../../api'

  let searchCity = $ref('')
  const clearInputHidden = computed(() => searchCity === '')
  const searchCityRef = $ref<HTMLInputElement>()
  let citys = $ref<City[]>([])
  let citysDivHidden = $ref(true)
  let haveData = computed(() => citys.length !== 0)

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
    searchCityRef!.addEventListener('input', async () => {
      citysDivHidden = !citysDivHidden
      citys = await getCitys(searchCity)
      await nextTick()
    })
    searchCityRef!.addEventListener('blur', () => {
      citysDivHidden = !citysDivHidden
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
    <div v-show="!citysDivHidden">
      <div v-if="!haveData">
        <span>无数据</span>
      </div>
      <div v-else
           class="relative top-1 left-[-28px] w-[250px] h-[200px] overflow-scroll flex flex-col
                border border-solid p-1.5 rounded">
      <span v-for="city in citys"
            class="border-b p-1.5
                   odd:bg-amber-100 even:bg-amber-50
                   hover:bg-blue-300 hover:text-white">
        {{ city.country + ' - ' + city.name }}
      </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .clear {
    position: absolute;
    right: 10px;
  }
</style>
