<template>
  <div class="content">
    <pokemon :pokemonList="votedPokemon" />
  </div>

</template>

<script>
import Pokemon from '../components/Pokemon';
import { mapGetters } from 'vuex';

export default {
  name: 'PokemonList',
  components: { Pokemon },
  computed: {
    ...mapGetters(['votedPokemon'])
  }
}
</script>
<style lang="scss" scoped>
.content{
  bottom: 0;
  left: 0;
  width: 55%;
  @media (max-width: 769px) {
    width: 100%!important;
  }
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
