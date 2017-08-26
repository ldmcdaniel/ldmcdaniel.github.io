<template>
  <div class="">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          Lucas McDaniel
          <!--<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">-->
        </a>
        <a class="navbar-item is-hidden-desktop" href="https://github.com/ldmcdaniel" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop" href="https://twitter.com/Ldmcdaniel109" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop" href="https://www.linkedin.com/in/ldmcdaniel/" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-linkedin"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop" href="mailto:ldmcdaniel@gmail.com" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-envelope"></i>
          </span>
        </a>
        <div class="navbar-burger burger" data-target="navMenuTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenuTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link  is-active" href="/documentation/overview/start/">
              About Me 
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item " href="/documentation/overview/start/">
                Overview
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/form/general/">
                Form
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">
                Elements
              </a>
                <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              <hr class="navbar-divider">
              <div class="navbar-item">
                <div>
                  <p class="is-size-6-desktop">
                    <strong class="has-text-info">0.5.1</strong>
                  </p>
                    <small>
                      <a class="bd-view-all-versions" href="/versions">View all versions</a>
                    </small>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link " href="http://bulma.io/blog/">
              Blog
            </a>
            <div id="blogDropdown" class="navbar-dropdown is-boxed" data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">03 Aug 2017</small>
                    </p>
                    <p>New feature: list of tags</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2017/08/01/bulma-bootstrap-comparison/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">01 Aug 2017</small>
                    </p>
                    <p>Bulma / Bootstrap comparison</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2017/07/24/access-previous-bulma-versions/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">24 Jul 2017</small>
                    </p>
                    <p>Access previous Bulma versions</p>
                  </div>
                </a>
              <a class="navbar-item" href="http://bulma.io/blog/">
                More posts
              </a>
              <hr class="navbar-divider">
              <div class="navbar-item">
                <div class="navbar-content">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <a class="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                          <span class="icon is-small">
                            <i class="fa fa-rss"></i>
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
