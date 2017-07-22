<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <!--<li><a href="#" target="_blank">Blog</a></li>-->
      <!--<li><a href="#" target="_blank">Music</a></li>-->
      <br>
      <li><a href="https://github.com/ldmcdaniel" target="_blank">Link to my Github</a></li>
    </ul>
    <h2>Apps</h2>
    <ul>
      <li><a href="http://ldmcdaniel.com/tank-u" target="_blank">Tank-U</a></li>
      <li><a href="https://github.com/ldmcdaniel/dotfiles" target="_blank">dotfiles</a></li>
      <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">Iron Maifitness</a></li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello, world!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
