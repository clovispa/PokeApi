<template>
  <span class="star-icon" :class="{ 'active': activePokemon }" @click="selectFavorite">
    <font-awesome-icon class="star fa-1x" :icon="['fas', 'star']" />
  </span>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
library.add(fas);


export default {
  name: 'Star',
  components: {FontAwesomeIcon},
  props: {
    activePokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  methods: {
    selectFavorite () {
      this.$emit('selectedPokemon');
    }
  }
}
</script>

<style lang="scss" scoped>
.star-icon {
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  color: #bfbfbf;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  cursor: pointer;
}

.active {
  color: #f3d23e;
}
</style>
