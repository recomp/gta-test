<template>
  <div id="character-stuff-board" class="board">
    <ammunition
      v-if="inArms && inArms.ammunitionType" />
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  import Ammunition from './WeaponAmmunition.vue'
  export default {
    name: 'CharacterStuff',
    components: {
      Ammunition
    },
    data: () => ({

    }),
    created() {

    },
    mounted() {

    },
    watch: {

    },
    computed: {
      ...mapGetters(
        {
          inArms: 'armory/inArms'
        }
      ),
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  #character-stuff-board{
    background: rgba(255, 255, 255, 0.5);
    width: 14.8vw;
    height: 4vh;
    flex-grow: 1;
  }
</style>