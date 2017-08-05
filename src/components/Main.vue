<template>
  <div class="main">
    <b-navbar toggleable type="inverse" variant="success" sticky="true">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="/">
        <span>Lucas McDaniel</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item to="/Main">About Me</b-nav-item>
          <b-nav-item>My Music</b-nav-item>
          <b-nav-item href="https://github.com/ldmcdaniel/django_blog">Blog</b-nav-item>
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
    <img class="jumbotron" src="../assets/Hobbiton.jpeg">
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

body {
  background-color: white;
  background: none;
}
.main {
  text-align: center;
  h1, h2 {
    font-weight: normal;
  }

  ul {
   list-style-type: none;
   padding: 0;
  }

  li {
   display: inline-block;
   margin: 0 10px;
  }

  a {
   color: #5700ff;
  }
  .jumbotron {
    max-width: 100%;
  }
}
</style>
