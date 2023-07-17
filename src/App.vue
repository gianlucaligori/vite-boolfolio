<script>

import ProjectList from './components/ProjectList.vue';
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';



export default {
  components: {
    ProjectList,
    AppNav,
    AppFooter,

  },
};


</script>

<template>
  <AppNav />
  <router-view></router-view>
  <!-- <h1 class="text-center mt-2">BoolPrees</h1>
    <h2 class="text-center">Questi sono i miei progetti fatti con Boolean Anno 2023</h2> -->
  <ProjectList />
  <AppFooter></AppFooter>
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
</style>