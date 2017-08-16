<template>
  <div class="navbar">
    <b-navbar toggleable type="light" variant="link" :fixed="position">
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
  props: [
    'position',
  ],
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
@font-face {
  font-family: 'Permanent Marker';
  src: url('../assets/PermanentMarker.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.navbar {
  text-align: center;
  font-family: 'Permanent Marker', cursive;
}
</style>
