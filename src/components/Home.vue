<template>
  <div class="home is-mobile">
    <div class="header section-one">
      <h1><span>Lucas </span><span>Mc</span><span>Daniel</span></h1>
    </div>
    <div class="body section-two">
      <div class="topper"></div>
      <div class="section-body"></div>
      <div class="section-footer"></div>
    </div>
    <div class="header section-three">
      <h1><span>Full </span><span>Stack </span><span>Developer</span></h1>
    </div>
    <div class="body section-four">
    </div>
    <div class="header section-five">
      <h1><span>Full </span><span>Stack </span><span>Developer</span></h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Full Stack Developer',
      showInstructions: false,
      isSideNavHidden: true,
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
  .header {
    height: calc(100vh - 52px);
    position: relative;
    h1 {
      font-weight: normal;
      font-size: 8rem;
      text-align: center;
      position: absolute;
      left: 50%;
      top: 50%;
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
  .body {
    height: 100vh;
    background-image: url('../assets/Hobbiton.jpeg');
    background-position: center;
    background-size: cover;
    .topper {
      height: 12vh;
      background-color: #ff0009;
    }
    .section-body {
      height: 80vh;
      background-color: white;
    }
    .section-footer {
      height: 8vh;
      background-color: #78c2f3;
    }
  }
}
</style>
