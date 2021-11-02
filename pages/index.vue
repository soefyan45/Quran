<template>
  <div>
    <div class="h-20 max-w-md"></div>
    <div class="max-w-md px-2 pt-1 h-screen bg-gray-100 mx-auto items-start">
      <div class="flex flex-col w-full leading-none">
        <h3 class="leading-relaxed font-semibold text-sm text-gray-400">Assalamualaikum</h3>
        <h1 class="tracking-wider font-medium text-xl text-gray-800 -mt-2">Soefyan</h1>
      </div>
      <div class="w-full flex items-center pt-3">
        <div class="w-full items-center px-3 py-7 flex h-32 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-ungu1">
          <div class="w-8/12 h-full flex flex-col py-auto items-start">
            <h1 class="text-white font-semibold text-base">Quran Completion</h1>
            <div class="w-full flex justify-between">
              <div class="text-sm font-normal text-gray-100">Last read Al Baqarah: 1</div>
              <div class="text-sm font-normal text-gray-100">3%</div>
            </div>
            <div class="w-full h-2 rounded mt-2 bg-gray-800 bg-opacity-25 items-start">
              <div class="w-8 h-full bg-white rounded"></div>
            </div>
          </div>
          <div class="w-4/12 h-full relative">
            <img class="object-contain -mt-10 absolute" src="/quran.png" alt="">
          </div>
        </div>
      </div>
      <div class="w-full flex pt-4 items-center justify-between">
        <div class="text-base font-semibold">My Schedule</div>
        <div class="text-sm text-green-400 font-normal">See All</div>
      </div>
      <div class="w-full flex pt-3 overflow-x-auto hiddenscroll">
        <div class="flex space-x-2">
          <div v-for="data in 10" :key="data" class="w-72 bg-white rounded flex flex-col px-2 py-2 shadow-lg">
            <button class="bg-green-300 my-2 w-20 rounded text-green-600 font-semibold">{{ data }} Nov 21</button>
            <h1 class="font-semibold text-lg">Quran Juz 1</h1>
            <p class="text-sm font-normal text-gray-400 -mt-2">Al Fatihah 1 - Al Baqarah 141</p>
            <div class="w-full flex items-start space-x-2 py-2">
              <div class="h-6 w-6 rounded-full bg-purple-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </div>
              <p class="text-gray-700 font-semibold text-sm">Quran Lovers</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex pt-4 items-center justify-between">
        <div class="text-base font-semibold">Community</div>
        <div class="text-sm text-green-400 font-normal">See All</div>
      </div>
      <div class="w-full flex flex-col pt-2 space-y-4">
        <div class="w-full flex bg-white items-center rounded-xl shadow-lg">
          <div class="w-10/12 flex items-center pl-2 space-x-2 my-4">
            <div class="h-12 w-12 flex items-center bg-blue-400 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
            </div>
            <div class="flex flex-col">
              <h1 class="text-lg font-semibold">Quran Lovers</h1>
              <p class="text-gray-400 text-sm font-semibold -mt-2">100 Members</p>
            </div>
          </div>
          <div class="w-2/12 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
          </div>
        </div>
        <div class="w-full flex bg-white items-center rounded-xl shadow-lg">
          <div class="w-10/12 flex items-center pl-2 space-x-2 my-4">
            <div class="h-12 w-12 flex items-center bg-ijo1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
            </div>
            <div class="flex flex-col">
              <h1 class="text-lg font-semibold">TPQ Pekanbaru</h1>
              <p class="text-gray-400 text-sm font-semibold -mt-2">230 Members</p>
            </div>
          </div>
          <div class="w-2/12 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
          </div>
        </div>
        <div class="w-full flex bg-white items-center rounded-xl shadow-lg">
          <div class="w-10/12 flex items-center pl-2 space-x-2 my-4">
            <div class="h-12 w-12 flex items-center bg-yellow-400 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
            </div>
            <div class="flex flex-col">
              <h1 class="text-lg font-semibold">Hafidz Pekanbaru</h1>
              <p class="text-gray-400 text-sm font-semibold -mt-2">1230 Members</p>
            </div>
          </div>
          <div class="w-2/12 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
.hiddenscroll::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hiddenscroll {
  -ms-overflow-style: none; /* IE and Edge*/
  scrollbar-width: none;  /* Firefox */
}
</style>
