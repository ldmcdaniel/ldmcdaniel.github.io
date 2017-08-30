<template>
  <div class="">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/profilePic.jpg" alt="Bulma: a modern CSS framework based on Flexbox" height="28">
        </a>
        <a class="navbar-item is-hidden-desktop" href="https://github.com/ldmcdaniel" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop" href="https://twitter.com/Ldmcdaniel109" target="_blank">
          <span class="icon" style="color: #1da1f2;">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop" href="https://www.linkedin.com/in/ldmcdaniel/" target="_blank">
          <span class="icon" style="color: #0077B5;">
            <i class="fa fa-linkedin"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop" href="mailto:ldmcdaniel@gmail.com" target="_blank">
          <span class="icon" style="color: #d95040;">
            <i class="fa fa-envelope"></i>
          </span>
        </a>
      </div>
      <div id="navMenuTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link  is-active" href="/documentation/overview/start/">
              About Me 
            </a>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link " href="http://bulma.io/blog/">
              Blog
            </a>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              Projects
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fa fa-github"></i>
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fa fa-twitter"></i>
            </span>
          </a>
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button" href="https://www.linkedin.com/in/ldmcdaniel/" target="_blank">
                  <span class="icon" style="color: #0077B5;">
                    <i class="fa fa-linkedin"></i>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </p>
              <p class="control">
                <a class="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://bulma.io"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
                  <span class="icon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/ldmcdaniel">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Github</span>
                </a>
              </p>
            </div>
          </div>
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
  text-align: center;
  font-family: 'Permanent Marker', cursive;
}
</style>
