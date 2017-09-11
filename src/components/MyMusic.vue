<template>
  <div class="home">
    <h1><span>Welcome to my Music. </span><span>Coming soon! </span><!--<span>I have:</span>--></h1>
    <!--<p>A Master of Music with a Bachelor of Fine Arts in classical guitar performance</p>
    <p>Played guitar and bass in small and medium sized jazz ensembles</p>
    <p>Appeared in Belmont University's Christmas at Belmont</p>
    <p>Taught general-music, choir, rock band, ukulele, guitar, mathematics, special education, and English to grades K-12 over 7 years of my professional life in two countries</p>
    <p>Orff Level !, Kodaly Level I, and have extensive experience in Music Learning Theory.  You could say I like music.  That would probably be true.</p>-->
  </div>
</template>

<script>
import Router from '../router';

export default {
  name: 'MyMusic',
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
  p, h5 {
    font-family: 'Bungee', cursive;
    color: #067d05;
  }
}
</style>
