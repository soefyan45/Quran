<template>
  <div class="h-full lg:flex lg:flex-col items-center bg-gray-700 font-poppins">
    <!-- Header start here -->
    <Navtop />
    <!-- Header end here -->
    <!-- Apps start here -->
    <nuxt />
    <!-- Apps end here -->
    <!-- Footer start here -->
    <Navbuttom />
    <!-- Footer end here -->
  </div>
</template>

<script>
import Navbuttom from "~/components/Navbuttom.vue";
import Navtop from "~/components/Navtop.vue";
export default {
    components: { Navbuttom, Navtop }
}
</script>
<style scoped>

</style>
