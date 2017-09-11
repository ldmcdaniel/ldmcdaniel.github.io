<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="tabs is-toggle is-fullwidth is-large">
        <ul>
          <li v-on:click="revealElement('tanku')" v-bind:class="{ 'is-active': tanku }">
            <a>
              <span class="icon"><i class="fa fa-gamepad"></i></span>
              <span>Tank-U</span>
            </a>
          </li>
          <li v-on:click="revealElement('dotfiles')" v-bind:class="{ 'is-active': dotfiles }">
            <a>
              <span class="icon"><i class="fa fa-laptop"></i></span>
              <span>dotfiles</span>
            </a>
          </li>
          <li v-on:click="revealElement('calculator')" v-bind:class="{ 'is-active': calculator }">
            <a>
              <span class="icon"><i class="fa fa-calculator"></i></span>
              <span>Calculator</span>
            </a>
          </li>
          <li v-on:click="revealElement('fitness')" v-bind:class="{ 'is-active': fitness }">
            <a>
              <span class="icon"><i class="fa fa-hand-rock-o"></i></span>
              <span>Fitness</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="body">
        <div class="section-body">
          <div class="card" v-show="tanku">
            <div class="card-header">
              <div class="card-header-title">Tank-U</div>
              <div class="card-header-icon">
                <span class="icon has-text-info">
                  <i class="fa fa-gamepad"></i>
                </span>
              </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="../assets/Tank-U_Screenshot.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="content">Tank-U is a tower-defense game build with Phaser.js.</div>
          </div>
          <div class="card" v-show="dotfiles">
            <div class="card-header">
              <div class="card-header-title">dotfiles</div>
              <div class="card-header-icon">
                <span class="icon has-text-info">
                  <i class="fa fa-laptop"></i>
                </span>
              </div>
            </div>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="content">Dotfiles are a project I will work on for my whole career.</div>
          </div>
          <div class="card" v-show="calculator">
            <div class="card-header">
              <div class="card-header-title">Calculator</div>
              <div class="card-header-icon">
                <span class="icon has-text-info">
                  <i class="fa fa-calculator"></i>
                </span>
              </div>
            </div>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="content">A calculator app built for mobile with Ionic.</div>
          </div>
          <div class="card" v-show="fitness">
            <div class="card-header">
              <div class="card-header-title">Fitness</div>
              <div class="card-header-icon">
                <span class="icon has-text-info">
                  <i class="fa fa-hand-rock-o"></i>
                </span>
              </div>
            </div>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="content">A custom fitness application built with Vue.js.</div>
          </div>
        </div>
      </div>
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
      tanku: true,
      dotfiles: false,
      calculator: false,
      fitness: false,
    };
  },
  methods: {
    setTimer() {
      setTimeout(() => this.negateInstructionsValue(), 2000);
    },
    negateInstructionsValue() {
      this.showInstructions = !this.showInstructions;
    },
    revealElement(element) {
      const elements = ['tanku', 'dotfiles', 'calculator', 'fitness'];
      elements.forEach((name) => {
        if (name === element) {
          this[name] = true;
        } else {
          this[name] = false;
        }
      });
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
    height: calc(100vh - 52px);
    background-image: url('../assets/Lucas_McDaniel_Alcatraz.jpg');
    background-position: 46% 85%;
    background-size: cover;
  }
  .hero,
  .panel {
    position: relative;
  }
  .footer {
  }
  .body {
    .topper {
      height: 12vh;
      background-color: #ff0009;
    }
    .section-body {
      background-color: white;
    }
    .section-footer {
      height: 8vh;
      background-color: #78c2f3;
    }
  }
}
</style>
