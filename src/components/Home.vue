<template>
  <div class="home" @click="go_to_main">
    <h1>{{ msg }}</h1>
    <h5 v-show="showInstructions">Click for more ^</h5>
  </div>
</template>

<script>
import Router from '../router';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Lucas McDaniel',
      showInstructions: false,
    };
  },
  methods: {
    go_to_main() {
      Router.push('Main');
    },
    setTimer() {
      setTimeout(() => this.negateInstructionsValue(), 2000);
    },
    negateInstructionsValue() {
      this.showInstructions = !this.showInstructions;
    },
  },
  mounted() {
    this.setTimer();
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Bungee Shade';
  src: url('../assets/BungeeShade-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Bungee';
  src: url('../assets/Bungee-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
body {
  height: 90vh;
  background: linear-gradient(0deg, #067d05, #0c9309 33%, #239b22 66%, #39a638);
  overflow-y: hidden;
}
.home {
  h1 {
    color: white;
    font-weight: normal;
    margin-top: 35vh;
    font-size: 5rem;
    font-family: 'Bungee Shade', cursive;
  }
  h5 {
    font-family: 'Bungee', cursive;
    color: white;
  }
}
</style>
