const mutations = {

  addFavoritePokemon (state, payload) {
    state.votedPokemon.push({name: payload, active: true});
  },

  addDeletePokemon(state, payload) {
    state.votedPokemon = state.votedPokemon.filter(pokemon =>
        pokemon.name.toLowerCase() !== payload.toLowerCase());
  },
   setPokemonList (state, payload) {
    state.pokemonList = payload;
  },
  setShowModal(state, payload) {
    state.showModal = payload;
    if(!state.showModal) {
      state.pokemon = {}
    }
  },

  setPokemon (state, payload) {
    state.pokemon = { ...payload }
  },


  setLoading(state, payload) {
    state.loading = payload;
  }

}

export default mutations;
