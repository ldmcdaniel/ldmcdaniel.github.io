<template>
  <div class="home">
    <hero></hero>
    <my-projects></my-projects>
    <panel></panel>
  </div>
</template>

<script>
import MyProjects from './projects';
import Hero from './hero';
import Panel from './panel';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
  components: {
    MyProjects,
    Hero,
    Panel,
  },
};
</script>

<style lang="scss" scoped>
.home {
  overflow-y: hidden;
  font-family: 'Bungee', cursive;
  text-align: center;
}
</style>
