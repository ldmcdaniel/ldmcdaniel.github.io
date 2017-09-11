<template>
  <div class="">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <router-link to="/">
          <figure class="image is-64x64">
            <img src="../assets/profilePic.jpg" alt="My profile picture">
          </figure>
        </router-link>
        <div class="navbar-burger burger" :class="{ 'is-active': showNav }" @click="toggleSideNav()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <div class="navbar-item">
            <router-link to="/about">About Me</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/blog">Blog</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/music">My Music</router-link>
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
          <div class="navbar-item is-hidden-touch">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-medium" href="https://www.linkedin.com/in/ldmcdaniel/" target="_blank">
                  <span class="icon" style="color: #0077B5;">
                    <i class="fa fa-linkedin"></i>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </p>
              <p class="control">
                <a class="bd-tw-button button is-medium"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://ldmcdaniel.com"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Check out this great site by Lucas McDaniel:&url=http://ldmcdaniel.com">
                  <span class="icon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <span>Twitter</span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary is-medium" href="https://github.com/ldmcdaniel" target="_blank">
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

export default {
  name: 'NavBar',
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleSideNav() {
      this.showNav = !this.showNav;
    },
  },
  props: [
  ],
  mounted() {
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
.navbar {
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  figure.image {
    margin: 1rem;
  }
  .navbar-burger {
    height: 96px;
    width: 96px;
  }
  .navbar-start {
    font-size: 2rem;
  }
  .fa {
    font-size: 2rem;
  }
}
</style>
