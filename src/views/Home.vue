<template>
  <div class="home">
      <header class="home_header">
        <img src="../assets/pikachu.png" alt="Pokemon">
      </header>
      <main class="home_main">
        <h1>Welcome to Pokédex</h1>
        <p class="margin-main-digital">The digital encyclopedia created by Professor Oak is an invaluable tool</p><p class="margin-main">  to Trainers in the Pokémon world.</p>
        <CommonButton :isActive="true" path="/pokemon-list">Get started</CommonButton>
      </main>
  </div>
</template>

<script>
import CommonButton from '../components/CommonButton';

export default {
  name: 'Home',
  components: {
    CommonButton
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  margin: 2.225rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .home_header {
    position: relative;
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: auto;
      background-repeat: no-repeat;
      background-position: 46px 67px;
      background-image: url("../assets/backgroundPikachu.png");
    }
  }
  .home_main {
    text-align: center;
    padding: 31px;
    p {
      margin-bottom: 40px;
    }

    h1 {
      font-weight: 700;
      font-size: 1.625rem;
    }

  }
}
.margin-main {
  margin-top: 0px;

}
.margin-main-digital {
  margin-bottom: 0px!important;
}
</style>
