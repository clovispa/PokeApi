<template>
  <div id="overlay" v-if="loading">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
      required: true,
      default: true
    }
  },
}
</script>

<style lang="scss" scoped>
#overlay {
  position: fixed;
  height: 100%;
  top: 0;
  background-color: var(--background-color);
  z-index: 1000;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  display: block;
  width: 100%;

  .loader {
    position: absolute;
    top: 40%;
    background-repeat: no-repeat;
    width: 106px;
    height: 106px;
    left: 35%;
    background-image: url("../../assets/loader.png");
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}
@media (min-width: 768px) {
  #overlay {
    .loader {
      left: 46%;
    }
  }
}
</style>
