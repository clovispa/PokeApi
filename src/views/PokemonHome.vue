<template>
    <div class="pokemon-home">
      <header class="pokemon-home__header">
        <img src="../assets/pikachu.png" alt="Pikachu">
      </header>
        <main class="pokemon-home__main">
          <h1>Welcome to Pokédex</h1>
          <p class="text-pricipal">The digital encyclopedia created by Professor Oak is an invaluable tool </p>
          <p class="text-secundary">to Trainers in the Pokémon world.</p>
          <pokemon-button :isActive="true" path="/pokemon-list">Get started</pokemon-button>
        </main>
    </div>
</template>

<script>
import PokemonButton from "../components/common/PokemonButton";

export default {
  name: 'Home',
  components: {
    PokemonButton
  }
}
</script>

<style lang="scss" scoped>
.text-pricipal {
  margin-top: 40px!important;
  margin-bottom: 0px!important;
}
.text-secundary {
  margin-top: 0px!important;
}
.pokemon-home {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2.225rem auto 0 auto;

  .pokemon-home__header {
    position: relative;

    img {
      max-width: 100%;
      height: auto;
      background-image: url("../assets/backgroundPikachu.png");
      background-repeat: no-repeat;
      background-position: 46px 67px;
      display: block;
      margin: 0 auto;

    }
  }

  .pokemon-home__main {
    padding: 30px;
    text-align: center;
    p {
      margin-bottom: 40px;
    }

    h1 {
      font-weight: 700;
      font-size: 1.625rem;
    }

  }
}
</style>
