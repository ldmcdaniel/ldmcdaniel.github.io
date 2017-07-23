<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
  overflow-y: hidden;
  background: linear-gradient(0deg, #067d05, #0c9309 33%, #239b22 66%, #39a638);
  #app {
   height: 100vh;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
  }
}
</style>
