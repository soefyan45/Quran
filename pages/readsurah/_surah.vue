<template>
<div class="h-full lg:flex lg:flex-col items-center bg-blue-500">
    <!-- Header start here -->
    <!-- <Navtop /> -->
    <div class="h-20 flex max-w-md bg-blue-500 mx-auto items-center fixed top-0 z-50">
      <div class="px-2 h-full w-screen mx-auto flex items-center justify-between">
        <div class="w-3/12 my-auto items-center flex">
          <svg xmlns="http://www.w3.org/2000/svg" class="px-auto text-white" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg>
        </div>
        <div class="w-6/12 my-auto items-center flex">
          <p class="mx-auto font-semibold font-poppins text-white text-xl">2. Al Baqarah</p>
        </div>
        <div class="w-3/12 my-auto justify-end space-x-2 flex">
          <svg xmlns="http://www.w3.org/2000/svg" class="px-auto text-white" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="px-auto text-white" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>

        </div>
      </div>
    </div>
    <!-- Header end here -->
    <!-- Apps start here -->
    <!-- <nuxt /> -->
    <div class="h-20 max-w-md"></div>
    <div class="max-w-md px-2 pt-1 h-full bg-gray-100 rounded-t-2xl mx-auto items-start">
      <div class="h-full">
        <div class="flex flex-wrap justify-end w-full pt-12">
          <!-- <div v-for="(ayat,k) in Ayat" :key="k" class="text-3xl pt-10 flex justify-end flex-row-reverse font-normal font-notonaskharabic float-right">
            <p v-if="ayat.nomor!=1">
            {{ ayat.ar }}  [{{ ayat.nomor-1 }}]<br>
            </p>
          </div> -->
          <table class="text-left w-full"> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
            <thead>
              <tr>
                <th colspan="2" class="py-4 flex items-center font-semibold font-notonaskharabic uppercase text-4xl">
                  <p class="mx-auto text-ijo1">{{ bismilla }}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(ayat,k) in Ayat" :key="k" class="w-full flex justify-end py-4 items-center">
                <td v-if="ayat.nomor!=1" class="w-11/12 text-4xl font-notonaskharabic flex justify-end border-b mx-auto border-green-500">
                  {{ ayat.ar }}
                </td>
                <td v-if="ayat.nomor!=1" class="w-1/12 text-2xl flex mx-auto justify-end font-semibold">
                  {{ ayat.nomor-1 }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Apps end here -->
    <!-- Footer start here -->
    <!-- <Navbuttom /> -->
    <!-- Footer end here -->
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      surah     : `${this.$route.params.surah}`,
      Ayat      : [],
      bismilla  : ''
    }
  },
  mounted() {
    this.getAyat()
  },
  methods: {
    async getAyat(){
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      };
      let {data,status} = await this.$axios.get('https://al-quran-8d642.firebaseio.com/surat/'+this.surah+'.json',config)
      console.log(data)
      console.log(status)
      this.Ayat = data
      this.bismilla = data[0].ar
    }
  },

}
</script>

<style>

</style>
