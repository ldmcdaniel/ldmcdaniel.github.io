<template>
  <div class="home">
    <div class="hero section-one">
      <h1><span>Lucas </span><span>Mc</span><span>Daniel</span></h1>
    </div>
    <div class="body section-two">
      <div class="topper"></div>
      <div class="section-body">
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-header">
                <div class="card-header-title">Tank-U</div>
                <div class="card-header-icon"></div>
              </div>
            </div>
            <h1>Hello World</h1>
          </div>
          <div class="column">
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
      <div class="section-footer"></div>
    </div>
    <div class="panel section-three">
      <h1><span>Full </span><span>Stack </span><span>Developer</span></h1>
    </div>
    <div class="body section-four">
    </div>
    <div class="panel section-five">
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
  overflow-y: hidden;
  font-family: 'Bungee', cursive;
  text-align: center;
  .hero {
    @media screen and (orientation:portrait) {
      height: calc(100vh - 52px);
    }
    height: calc(200vh - 52px);
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
  .panel {
    height: 100vh;
    background-image: url('../assets/Lucas_McDaniel_Alcatraz.jpg');
    background-position: 43% 85%;
    background-size: cover;
  }
  .hero,
  .panel {
    position: relative;
  }
  .body {
    height: 75vh;
    .topper {
      height: 12vh;
      background-color: #ff0009;
    }
    .section-body {
      height: 55vh;
      background-color: white;
    }
    .section-footer {
      height: 8vh;
      background-color: #78c2f3;
    }
  }
}
</style>
