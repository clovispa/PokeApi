<template>
  <div class="pokemon-item">
    <p class="item_name" @click="$emit('openModal', pokemonName)">{{ pokemonName }}</p>
    <star :activePokemon="votedItem" @selectedPokemon="selectedPokemon" />
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import Star from './common/PokemonStar';

export default {
  name: 'PokemonItem',
  props: {
    pokemonName: {
      type: String,
      required: true
    }
  },
  components: {Star},
  computed: {
    ...mapGetters(['votedPokemon']),
    votedItem () {
      const newPokemon = this.votedPokemon.find(item => item.name.toLowerCase() === this.pokemonName.toLowerCase())
      return !!newPokemon;
    },
  },

  methods: {
    ...mapActions(['saveVotedPokemon']),
    selectedPokemon () {
      this.saveVotedPokemon(this.pokemonName);
    }
  }

}
</script>

<style lang="scss" scoped>
.pokemon-item {
  position: relative;
  display: flex;
  background-color: #fff;
  padding: 5px 10px 5px 20px;
  border-radius: 5px;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  width: inherit;

  .item_name {
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    cursor: pointer;
  }
}
</style>
