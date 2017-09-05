<template>
  <div class="home">
    <div class="columns">
      <div v-bind:class="{ 'is-three-quarters': !isHidden }" class="column">
        <section v-on:click="toggleSideNav">
          <div class="header">
            <nav-bar></nav-bar>
            <h1><span>Lucas </span><span>Mc</span><span>Daniel</span></h1>
          </div>
          <div class="body">
          </div>
          <div class="header">
            <h1><span>Full </span><span>Stack </span><span>Developer</span></h1>
          </div>
          <foot-bar></foot-bar>
        </section>
      </div>
      <div v-bind:class="{ 'is-hidden': isHidden }" class="column">
        <aside class="menu">
          <ul class="menu-list">
            <li><a>About Me</a></li>
            <li><a>Blog</a></li>
            <li><a>Projects</a>
              <ul>
                <li><a>Tank-U</a></li>
                <li><a>Dotfiles</a></li>
                <li><a>Calculator</a></li>
                <li><a>Fitness</a></li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './navbar';
import FootBar from './footer';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Full Stack Developer',
      showInstructions: false,
      isHidden: true,
    };
  },
  methods: {
    setTimer() {
      setTimeout(() => this.negateInstructionsValue(), 2000);
    },
    negateInstructionsValue() {
      this.showInstructions = !this.showInstructions;
    },
    toggleSideNav() {
      this.isHidden = !this.isHidden;
    },
  },
  mounted() {
    this.setTimer();
  },
  components: {
    NavBar,
    FootBar,
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
    height: 100vh;
    position: relative;
    h1 {
      font-weight: normal;
      font-size: 5rem;
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
  }
}
</style>
