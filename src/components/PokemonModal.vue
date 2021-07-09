<template>
  <div class="modalPoke" v-if="showModal">
    <div class="modalPoke_content">
      <div class="modalPoke_header">
         <span class="close" @click="$emit('closeModal')">&times;</span>
        <img :src="pokemon.sprites.front_default" alt="pokemon.name">
      </div>
      <div class="modalPoke_body">
        <p><strong>Name:</strong> {{ pokemon.name }}</p>
         <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
          <p><strong>Height:</strong> {{ pokemon.height }}</p>
           <p><strong>Types:</strong> {{ getTypes }}</p>
      </div>
      <div class="modalPoke_footer">
        <button class="modalPoke_button" @click="ToClipboard">Share to my friends</button>
         <PokemonStar @selectedPokemon="selectedPokemon" :activePokemon="isPokemonSelected" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PokemonStar from "./common/PokemonStar";
import VueClipboard from 'vue-clipboard2'
import Vue from 'vue';
Vue.use(VueClipboard)

export default {
  name: "PokemonModal",
  components: { PokemonStar },
  props: {
    showModal: {
      type: Boolean,
      required: true,
      default: false
    },
    pokemon: {
      type: Object,
      default: () => ({
      })
    }
  },

  computed: {
    ...mapGetters(['votedPokemon']),
    isPokemonSelected () {
      const newPokemon = this.votedPokemon.find(item => item.name.toLowerCase() === this.pokemon.name.toLowerCase());
      return !!newPokemon;
    },
    getTypes () {
      const typesPokemon = this.pokemon.types.map(({ type }) => type.name);
      return typesPokemon.join(', ');
    },
    getPokemonFeatures () {
      const { name, weight, height } = this.pokemon;
      return ` ${height }, ${this.getTypes}, ${name}, ${weight}`;
    }
  },

  methods: {
    ...mapActions(['saveVotedPokemon']),
    selectedPokemon () {
      this.saveVotedPokemon(this.pokemon.name);
    },
    ToClipboard () {
      this.$copyText(this.getPokemonFeatures).then(function (e) {
        alert('Copy to clipboard')
        console.log(e)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.modalPoke_content {
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.modalPoke {
  display: block;
  padding-top: 80px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}



.close {
  right: 10px;
  color: white;
  float: right;
  font-size: 28px;
  position: absolute;
  top: 10px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  cursor: pointer;
  text-decoration: none;
}

img {
  width: 290px;
  height: 190px;
}
.modalPoke_header {
  position: relative;
  display: flex;
  background-image: url("../assets/backgroundModal.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 2px 16px;

}

.modalPoke_body {
  padding: 2px 16px;

  p {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 5px;
  }
}

.modalPoke_footer {
  justify-content: space-around;
  align-items: center;
  padding: 0 16px 15px 16px;
  display: flex;
}

.modalPoke_button {
  padding: 11px 20px;
  color: #ffffff;
  border: none;
  font-weight: 700;
  text-decoration: none;
  background-color: var(--active-button-color);
  border-radius: 60px;

  font-size: 1rem;
  cursor: pointer;
}

@media (min-width: 768px) {
  .modalPoke_content {
    width: 500px;
    height: 500px;
  }
}
</style>
