<template>
  <div id="app">
    <!-- <PanelContainer>
    </PanelContainer> -->
    <router-view />
  </div>
</template>
<style>
</style>
<script>
// import PanelContainer from './components/PanelContainer.vue';
// import { getTopics } from "./http/api.js";
// import HeaderNav from "./components/HeaderNav.vue";
export default {
  components: {
    // PanelContainer
  },
  // async created() {
  //   const res = await getTopics({ params: { tab: "share" } });
  //   console.log(res.data);
  // },
};
</script>
