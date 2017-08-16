<template>
  <div class="home">
    <div class="container-fluid">
      <h1><span>Lucas </span><span>Mc</span><span>Daniel</span></h1>
      <h5 v-show="showInstructions"></h5>
    </div>
    <img class="jumbotron" src="../assets/Hobbiton.jpeg">
    <div class="container hidden">
      <div class="row">
        <div class="col-sm">
          <b-card title="Tank-U"
                  tag="article"
                  class="mb-2">
            <p class="card-text">
              Tank-U is a tower defense game built with Phaser.js.
            </p>
            <b-button class="play-button" href="https://ldmcdaniel.github.io/tank-u/" variant="primary">
              Play Tank-U
            </b-button>
          </b-card>
        </div>
        <div class="col-sm">
          <b-card title="dotfiles"
                  tag="article"
                  class="mb-2">
            <p class="card-text">
              Dotfiles are one of the only things we will work for our whole career.  Keep them version controlled.  Check mine out!
            </p>
            <b-button class="play-button" href="https://github.com/ldmcdaniel/dotfiles/" variant="primary">
              View Dotfiles Repo
            </b-button>
          </b-card>
        </div>
        <div class="col-sm">
          <b-card title="Calculator"
                  tag="article"
                  class="mb-2">
            <p class="card-text">
              I made a calculator with JavaScript.
            </p>
            <b-button class="play-button" href="https://ldmcdaniel.github.io/ionic-calculator/" variant="primary">
              Use the Calculator
            </b-button>
          </b-card>
        </div>
        <div class="col-sm">
          <b-card title="Fitness"
                  tag="article"
                  class="mb-2">
            <p class="card-text">
              A Vue.js fitness app built for my needs.
            </p>
            <b-button class="play-button" href="https://github.com/ldmcdaniel/fitness/" variant="primary">Check it out!</b-button>
          </b-card>
        </div>
      </div>
    </div>
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
