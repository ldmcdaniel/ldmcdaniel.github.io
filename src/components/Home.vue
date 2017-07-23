<template>
  <div class="main">
    <link href="https://fonts.googleapis.com/css?family=Bungee|Bungee+Shade" rel="stylesheet">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Lucas McDaniel',
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  h1 {
    color: white;
    font-weight: normal;
    margin-top: 35vh;
    font-size: 5rem;
    font-family: 'Bungee Shade', cursive;
  }
}
</style>
