<template>
  <form @submit.prevent="onSubmit" class="pokemon-search">
    <div class="search__container">
      <input v-model="pokemon" type="text" @keyup="onSubmit" class="search-input" placeholder="search">
      <font-awesome-icon class="search__icon" :icon="['fas', 'search']" />
    </div>
  </form>
</template>

<script>

import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(far);

export default {
  name: 'PokemonSearch',

  components: {FontAwesomeIcon},

  data () {
    return {
      pokemon: ''
    }
  },

  methods: {
    onSubmit () {
      this.$emit('searchPokemon', this.pokemon)
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-search {
  width: 100%;
  position: relative;

  .search__icon {
    position: absolute;
    color: #BFBFBF;
    left: 15px;
  }

  .search__container {
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;

    .search-input {
      width: 100%;
      background: #FFFFFF;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
      border: none;
      padding: 0 43px;
      height: 50px;
      border-radius: 5px;
      font-size: 1rem;
    }
  }
}

</style>
