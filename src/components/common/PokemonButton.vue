<template>
  <div class="pokemon-button">
    <router-link :class="{ 'active': isActive }" :to="path" @click="$emit('pokemonButton')">
      <slot />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PokemonButton',

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      required: true
    },

  }
}
</script>

<style lang="scss" scoped>
.pokemon-button {
  a {
    padding: 11px 20px;
    color: #ffffff;
    border: none;
    font-weight: 700;
    text-decoration: none;
    background-color: var(--no-active-button-color);
    border-radius: 60px;
    padding-left: 50px!important;
    padding-right: 50px!important;
    margin-right: 10px;

    &.router-link-exact-active {
      background-color: var(--active-button-color);
    }
  }

  .active {
    background-color: var(--active-button-color);
  }
}
</style>
