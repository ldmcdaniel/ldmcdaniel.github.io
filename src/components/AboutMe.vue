<template>
  <div class="blog">
    <h1><span>Welcome to </span><span>About Me.  </span><span>Coming soon!</span></h1>
  </div>
</template>

<script>
import Router from '../router';

export default {
  name: 'AboutMe',
  data() {
    return {
    };
  },
  methods: {
    go_home() {
      Router.push('Home');
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
  components: {
  },
};
</script>

<style lang="scss" scoped>
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
.blog {
  text-align: center;
  height: 100vh;
  position: relative;
  h1 {
    font-weight: normal;
    font-size: 5rem;
    font-family: 'Bungee Shade', cursive;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
}
</style>
