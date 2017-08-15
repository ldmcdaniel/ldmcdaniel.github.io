<template>
  <div class="home">
    <h1><span>Welcome to </span><span>my blog.  </span><span>Coming soon!</span></h1>
  </div>
</template>

<script>
import Router from '../router';

export default {
  name: 'Blog',
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
.home {
  text-align: center;
  h1 {
    font-weight: normal;
    margin: 40vh 0;
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
}
</style>
