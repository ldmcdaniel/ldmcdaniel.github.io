<template>
  <div class="">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/profilePic.jpg" alt="My profile picture" height="28">
        </a>
        <a class="navbar-item" href="https://www.linkedin.com/in/ldmcdaniel/" target="_blank">
          <span class="icon" style="color: #0077B5;">
            <i class="fa fa-linkedin"></i>
          </span>
        </a>
        <a class="navbar-item" href="https://twitter.com/Ldmcdaniel109" target="_blank">
          <span class="icon" style="color: #1da1f2;">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
        <a class="navbar-item" href="https://github.com/ldmcdaniel" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-github"></i>
          </span>
        </a>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-start"></div>
        <div class="navbar-end">
        </div>
      </div>
    </nav>
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
  font-family: 'Permanent Marker', cursive;
}
</style>
