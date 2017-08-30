<template>
  <div class="home">
    <div class="">
      <h1><span>Lucas </span><span>Mc</span><span>Daniel</span></h1>
      <h5 v-show="showInstructions"></h5>
    </div>
    <img class="jumbotron" src="../assets/Hobbiton.jpeg">
  </div>
</template>

<script>
import NavBar from './navbar';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Full Stack Developer',
      showInstructions: false,
    };
  },
  methods: {
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
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Permanent Marker';
  src: url('../assets/PermanentMarker.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
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
.home {
  font-family: 'Bungee', cursive;
  text-align: center;
  .card-text {
    font-family: 'Permanent Marker', cursive;
  }
  h1 {
    font-weight: normal;
    margin-top: 35vh;
    height: 55vh;
    font-size: 5rem;
    font-family: 'Bungee Shade', cursive;
    span {
      &:nth-child(1) {
        color: #239b22;
      }
      &:nth-child(2) {
        color: #78c2f3;
      }
      &:nth-child(3) {
        color: #ff0009;
      }
    }
  }
  h5 {
    font-family: 'Bungee', cursive;
    color: #067d05;
  }
  .jumbotron {
    padding: 0;
    max-width: 100%;
  }
}
</style>
