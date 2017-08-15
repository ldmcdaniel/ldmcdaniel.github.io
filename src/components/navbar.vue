<template>
  <div class="home">
    <b-navbar toggleable type="inverse" variant="info" fixed="">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item to="/">About Me</b-nav-item>
          <b-nav-item to="/music">My Music</b-nav-item>
          <b-nav-item to="/blog">Blog</b-nav-item>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item-dropdown text="Projects" right>
            <b-dropdown-item href="https://ldmcdaniel.github.io/tank-u/">Tank-U</b-dropdown-item>
            <b-dropdown-item href="https://github.com/ldmcdaniel/dotfiles/">dotfiles</b-dropdown-item>
            <b-dropdown-item href="https://ldmcdaniel.github.io/ionic-calculator/">Calculator</b-dropdown-item>
            <b-dropdown-item href="https://github.com/ldmcdaniel/fitness/">Fitness</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <span style="font-weight: bold;">Find Me</span>
            </template>
            <b-dropdown-item href="https://github.com/ldmcdaniel">Github</b-dropdown-item>
            <b-dropdown-item href="https://twitter.com/Ldmcdaniel109">Twitter</b-dropdown-item>
            <b-dropdown-item href="https://www.linkedin.com/in/ldmcdaniel/">LinkedIn</b-dropdown-item>
            <b-dropdown-item href="mailto:ldmcdaniel@gmail.com">Email</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Router from '../router';

export default {
  name: 'NavBar',
  data() {
    return {
      position: '',
      showInstructions: false,
    };
  },
  methods: {
    go_to_main() {
      Router.push('Main');
    },
    go_to_blog() {
      Router.push('Blog');
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
    margin-top: 35vh;
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
