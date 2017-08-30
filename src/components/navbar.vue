<template>
  <div class="">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/profilePic.jpg" alt="My profile picture" height="28">
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
        <!--<a class="navbar-item is-hidden-desktop" href="mailto:ldmcdaniel@gmail.com" target="_blank">-->
          <!--<span class="icon" style="color: #d95040;">-->
            <!--<i class="fa fa-envelope"></i>-->
          <!--</span>-->
        <!--</a>-->
        <div class="navbar-burger burger" data-target="navMenuTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <a href="/#/">
              About Me 
            </a>
          </div>
          <div class="navbar-item">
            <a href="/#/blog">
              Blog
            </a>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              Projects
            </div>
            <div id="moreDropdown" class="navbar-dropdown is-boxed">
              <a class="navbar-item " href="https://ldmcdaniel.github.io/tank-u/">
                <div class="level is-mobile">
                  <div class="level-right">
                    <div class="level-item">
                      <span class="icon has-text-info">
                        <i class="fa fa-gamepad"></i>
                      </span>
                    </div>
                  </div>
                  <div class="level-left">
                    <div class="level-item">
                      <p>
                        <strong>Tank-U</strong>
                        <br>
                        <small>A tower-defense game built with Phaser.js</small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a class="navbar-item " href="https://github.com/ldmcdaniel/dotfiles/">
                <div class="level is-mobile">
                  <div class="level-right">
                    <div class="level-item">
                      <span class="icon has-text-info">
                        <i class="fa fa-laptop"></i>
                      </span>
                    </div>
                  </div>
                  <div class="level-left">
                    <div class="level-item">
                      <p>
                        <strong>dotfiles</strong>
                        <br>
                        <small>Self installing custom vim and dotfiles</small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a class="navbar-item " href="https://ldmcdaniel.github.io/ionic-calculator/">
                <div class="level is-mobile">
                  <div class="level-right">
                    <div class="level-item">
                      <span class="icon has-text-info">
                        <i class="fa fa-calculator"></i>
                      </span>
                    </div>
                  </div>
                  <div class="level-left">
                    <div class="level-item">
                      <p>
                        <strong>Calculator</strong>
                        <br>
                        <small>A calculator app built for mobile with Ionic</small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a class="navbar-item " href="https://github.com/ldmcdaniel/fitness/">
                <div class="level is-mobile">
                  <div class="level-right">
                    <div class="level-item">
                      <span class="icon has-text-info">
                        <i class="fa fa-hand-rock-o"></i>
                      </span>
                    </div>
                  </div>
                  <div class="level-left">
                    <div class="level-item">
                      <p>
                        <strong>Fitness</strong>
                        <br>
                        <small>A custom fitness application built with Vue.js</small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
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
              <!--<p class="control">-->
                <!--<a class="button" href="mailto:ldmcdaniel@gmail.com" target="_blank">-->
                  <!--<span class="icon" style="color: #d95040;">-->
                    <!--<i class="fa fa-envelope"></i>-->
                  <!--</span>-->
                  <!--<span>Gmail</span>-->
                <!--</a>-->
              <!--</p>-->
              <p class="control">
                <a class="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://ldmcdaniel.com"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Check out this great site by Lucas McDaniel:&url=http://ldmcdaniel.com">
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
