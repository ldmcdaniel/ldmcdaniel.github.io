<template>
  <div class="panel">
    <h1><span>Full </span><span>Stack </span><span>Developer</span></h1>
  </div>
</template>

<script>

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
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Bungee';
  src: url('../assets/Bungee-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.home {
  .panel {
    height: calc(100vh - 52px);
    background-image: url('../assets/Lucas_McDaniel_Alcatraz.jpg');
    background-position: 46% 85%;
    background-size: cover;
    position: relative;
    font-size: 3rem;
    color: white;
  }
}
</style>
