<template>
  <div class="center-div">
    <layout-default>
      <pokemon-search @searchPokemon="filterPokemonList" />
      <div class="pokemon-star-container" v-if="filteredData.length">
        <pokemon-item
            v-for="(pokemon, index) in filteredData"
            :key="index"
            :pokemonName="pokemon.name"
            @openModal="showPokemonModal"
        />
      </div>
      <pokemon-empty v-else />
    </layout-default>
    <pokemon-loading :loading="loading" />
    <pokemon-modal :pokemon="selectedPokemon" :showModal="showModal" @closeModal="closeModal" />
  </div>

</template>

<script>
import LayoutDefault from '@/views/LayoutDefault';
import PokemonLoading from '@/components/common/PokemonLoading';
import { mapActions, mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import PokemonEmpty from "./common/PokemonEmpty";
import PokemonSearch from '@/components/PokemonSearch';
import PokemonItem from '@/components/PokemonItem';
import PokemonModal from '@/components/PokemonModal';

library.add(far);
library.add(fas);

export default {
  name: 'Pokemon',
  data () {
    return {
      searchPokemon: null,
    }
  },
  props: {
    pokemonList: {
      type: Array,
      required: true
    }
  },
  components: {
    PokemonEmpty,
    PokemonItem,
    PokemonModal,
    LayoutDefault,
    PokemonLoading,
    PokemonSearch,
  },


  computed: {
    ...mapGetters(['loading', 'votedPokemon', 'pokemon','showModal']),
    filteredData () {
      let searchString = this.searchPokemon;
      let new_array = this.pokemonList;
      if (!searchString) {
        return new_array;
      }
      searchString = searchString.trim().toLowerCase();
      new_array = new_array.filter(item => {
        if(item.name.toLowerCase().indexOf(searchString) !== -1) {
          return item;
        }
      })
      return new_array;
    },
    selectedPokemon () {
      return this.pokemon
    }
  },

  methods: {
    ...mapActions([ 'closePokemonModal', 'getPokemon']),

      showPokemonModal(itemName) {
        this.getPokemon(itemName)
      },
    closeModal () {
      this.closePokemonModal();
    },
    filterPokemonList (item) {
      this.searchPokemon = item;
    },
  }
}
</script>
<style lang="scss" scoped>
.center-div{
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.pokemon-star-container {
  margin-top: 30px;

  .pokemon-star-container__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .pokemon-star-container__button {
      padding: 30px 30px;
      border-radius: 40px;
      background-color: var(--active-button-color);
      border: none;
      cursor: pointer;
      margin: 0 5px 20px 5px;
      color: #fff;

      &[disabled] {
        background-color: var(--no-active-button-color);
        cursor: not-allowed;
      }
    }
  }
}
</style>
