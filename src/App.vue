<template>
  <div id="app">
    <!--<nav-bar></nav-bar>-->
    <router-view></router-view>
    <!--<foot-bar></foot-bar>-->
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    };
  },
  components: {
  },

};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  min-height: 100vh;
}
</style>
