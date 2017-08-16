<template>
  <div class="iCard"
      <div class="col-sm">
        <b-card :title="title"
                img="https://lorempixel.com/600/300/food/5/"
                img-alt="Image"
                tag="article"
                class="mb-2">
          <p class="card-text">
            {{ description }}
          </p>
          <b-button href="#" variant="primary">{{ button-text }}</b-button>
        </b-card>
      </div>
  </div>
</template>

<scpript>
module.exports = {
  data() {
    return {
    };
  },
  props: [
    'title', 'description', 'button-text',
  ],
}
</script>

<styles></styles>
