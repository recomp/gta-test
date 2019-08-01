<template>
  <div id="character-stuff-board" class="board">
    <ammunition
      v-if="inArms && inArms.name" />
    <div class="stuff-controls-wrapper">
      <div
        id="character-cash"
        class="stuff-controls">
        <i class="fi flaticon-purse"></i>
        <span>$13582</span>
      </div>
      <div
        id="game-time"
        class="stuff-controls">
        <i class="fi flaticon-clock-circular-outline"></i>
        <span>18:32</span>
      </div>
    </div>
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
    max-width: 30vh;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-grow: 1;
    margin-bottom: 3vh;
    .stuff-controls-wrapper{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      margin-right: .3vh;
      .stuff-controls{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 .4vh;
        color: #fff;
        font-weight: bold;
        i{
          margin-right: .4vh;
        }
      }
    }
  }
</style>