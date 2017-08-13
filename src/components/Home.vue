<template>
  <div class="main">
    <div class="container-fluid">
      <h1><span>Lucas </span><span>Mc</span><span>Daniel</span></h1>
      <h5 v-show="showInstructions"></h5>
    </div>
    <img class="jumbotron" src="../assets/Hobbiton.jpeg">
    <div class="container">
      <div class="row">
      <div class="col-sm">
        <b-card title="Card Title"
                img="https://lorempixel.com/600/300/food/5/"
                img-alt="Image"
                tag="article"
                class="mb-2">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <div class="col-sm">
        <b-card title="Card Title"
                img="https://lorempixel.com/600/300/food/5/"
                img-alt="Image"
                tag="article"
                class="mb-2">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <div class="col-sm">
        <b-card title="Card Title"
                img="https://lorempixel.com/600/300/food/5/"
                img-alt="Image"
                tag="article"
                class="mb-2">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <div class="col-sm">
        <b-card title="Card Title"
                img="https://lorempixel.com/600/300/food/5/"
                img-alt="Image"
                tag="article"
                class="mb-2">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
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
.main {
  font-family: 'Permanent Marker', cursive;
  text-align: center;
  h1 {
    font-weight: normal;
    margin-top: 35vh;
    height: 63vh;
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
