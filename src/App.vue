<template>
  <div id="app">
    <!-- <video-comp v-if="showIntro"></video-comp> -->
    <div>
      <div id="bod">
        <navbar/>
      </div>
      <router-view/>
      <footerComp/>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footerComp from './components/footerComp.vue';
// import videoComp from './components/videoComp.vue';

export default {
  components: {
    navbar,
    footerComp
    // videoComp,
  },
  data() {
    return {
      showIntro: true
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.showIntro = false;
    // }, 15000);
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
