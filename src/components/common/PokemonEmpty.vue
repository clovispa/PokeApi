<template>
  <div class="pokemon-alert">
    <p class="pokemon_title">Uh-oh</p>
    <p class="pokemon_text">You look lost on your journey!</p>
    <pokemon-button :isActive="true" path="/">Go back home</pokemon-button>
  </div>
</template>

<script>
import PokemonButton from './PokemonButton.vue'
export default {
  name: 'PokemonEmpty',
  components: { PokemonButton },
}
</script>

<style lang="scss" scoped>
.pokemon-alert {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  .pokemon_text {
    font-size: 20px;
  }

  .pokemon_title {
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 0;
  }

}
</style>
