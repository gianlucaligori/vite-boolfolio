<script>

import ProjectList from './components/ProjectList.vue';


export default {
  components: {

    ProjectList,

  },
};


</script>

<template>
  <h1 class="text-center mt-2">BoolPrees</h1>
  <h2 class="text-center">Questi sono i miei progetti fatti con Boolean Anno 2023</h2>
  <projectList />
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
</style>