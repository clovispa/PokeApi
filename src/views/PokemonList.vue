<template>
<div class="content">
  <pokemon :pokemonList="pokemonList" />
</div>
</template>

<script>
import Pokemon from '@/components/Pokemon';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PokemonList',
  components: { Pokemon },
  computed: {
    ...mapGetters(['pokemonList'])
  },
  created () {
    this.getPokemonList()
  },
  methods: {
    ...mapActions(['getPokemonList'])
  }
}
</script>
<style lang="scss" scoped >
.content {
  bottom: 0;
  left: 0;
  width: 55%;
  display: flex;
  @media (max-width: 769px) {
    width: 100%!important;
  }
  align-items: center;
  justify-content: space-around;
}
</style>
