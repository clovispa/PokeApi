import PokemonService from "@/service/PokemonService";

const actions = {
  async getPokemon ({ commit }, pokemonName) {
    try {
      commit('setLoading', true);
      const { data } = await PokemonService.pokemon(pokemonName);
      commit('setPokemon', data);
      commit('setShowModal', true);
    } catch (error) {
      console.log(error);
    } finally {
      commit('setLoading', false);
    }
  },
  async getPokemonList ({ commit }) {
    commit('setLoading', true);
    setTimeout( async () => {
      try {
        const { data: { results } } = await PokemonService.pokemonList();
        commit('setPokemonList', results);
      } catch (error) {
        console.log(error);
      } finally {
        commit('setLoading', false);
      }
    }, 2000);
  },

  closePokemonModal({ commit }) {
    commit('setShowModal', false);
  },

  saveVotedPokemon ({ state, commit }, pokemon) {
    const votedPokemonFound = state.votedPokemon.find(item => item.name.toLowerCase() === pokemon.toLowerCase());
    !votedPokemonFound ? commit('addFavoritePokemon', pokemon) : commit('addDeletePokemon', pokemon);
  }

}

export default actions;
