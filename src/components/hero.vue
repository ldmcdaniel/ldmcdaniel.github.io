<template>
  <div class="hero">
    <h1 v-show="showInstructions"><span>Lucas </span><span>Mc</span><span>Daniel</span></h1>
  </div>
</template>

<script>

export default {
  name: 'Hero',
  data() {
    return {
      showInstructions: false,
    };
  },
  methods: {
    setTimer() {
      setTimeout(() => this.negateInstructionsValue(), 800);
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
.hero {
  @media screen and (orientation:portrait) {
    height: calc(100vh - 96px);
  }
  position: relative;
  height: calc(200vh - 96px);
  background-image: url('../assets/Lucas_McDaniel_Milford_Sound_NZ.jpg');
  background-position: top;
  background-size: cover;
  h1 {
    font-weight: normal;
    font-size: 8rem;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 16%;
    transform: translate(-50%, -50%);
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
}
</style>
