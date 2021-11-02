<template>
  <div>
    <div class="h-20 w-full"></div>
    <div class="max-w-md pt-1 h-screen bg-gray-100 mx-auto items-start">
      <div class="flex px-2 flex-col w-full leading-none">
        <h3 class="leading-relaxed font-semibold text-sm text-gray-400">Reading Surah</h3>
        <h1 class="tracking-wider font-medium text-xl text-gray-800 -mt-2">Al-Quran</h1>
      </div>
      <div class="w-full px-2 flex pt-2">
        <input class="w-full h-12 bg-gray-200 rounded-lg px-2 py-1 text-lg" placeholder="Search surah">
      </div>
      <div class="w-full px-2 flex pt-4 items-center justify-between">
        <div class="text-sm text-gray-500 font-semibold">QUICK ACCESS</div>
        <!-- <div class="text-sm text-green-400 font-normal">See All</div> -->
      </div>
      <div class="w-full pl-2 flex pt-3 overflow-x-auto hiddenscroll">
        <div class="flex h-10 space-x-2 pb-2">
          <div v-for="data in 10" :key="data" class="w-20 border-4 border-ijo1 rounded-xl flex items-center py-2 shadow-lg text-center">
            <p class="mx-auto">Al Kahfi</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full items-center pt-2 px-2">
        <div class="w-full flex items-center justify-between">
          <div class="w-6/12 border-b-4 flex items-center py-2 border-green-500">
            <p class="mx-auto font-semibold">SURAH</p>
          </div>
          <div class="w-6/12 flex items-center">
            <p class="mx-auto font-semibold">JUZ</p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col pb-20">
        <nuxt-link v-for="(surah, k) in Surah" :key="k" :to="'/readsurah/'+surah.nomor" class="w-full flex px-2 py-4 bg-white border-b-2">
          <div class="w-7/12 flex items-center">
            <div class="h-10 w-10 border-b-2 border-green-600 bg-contain bg-no-repeat flex items-center">
              <div class="flex text-xl mx-auto font-bold text-yellow-600">{{surah.nomor}}</div>
            </div>
            <div class="w-full flex flex-col mx-auto pl-2">
              <h1 class="text-2xl font-medium">{{surah.nama}}</h1>
              <p class="-mt-2 text-xs font-semibold text-gray-600">{{surah.arti}}</p>
            </div>
          </div>
          <div class="w-5/12 flex items-center justify-end">
            <p class="text-2xl font-semibold">{{surah.asma}}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Surah : [],
    }
  },
  mounted() {
    this.getSurah()
  },
  methods: {
    async getSurah(){
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      };
      let {data,status} = await this.$axios.get('https://al-quran-8d642.firebaseio.com/data.json',config)
      console.log(data)
      console.log(status)
      this.Surah = data
    }
  },
}
</script>

<style>
.hiddenscroll::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hiddenscroll {
  -ms-overflow-style: none; /* IE and Edge*/
  scrollbar-width: none;  /* Firefox */
}
</style>
