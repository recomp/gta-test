<template>
  <div id="character-stuff-board" class="board">
    <ammunition
      v-if="inArms && inArms.name" />
    <div class="stuff-controls-wrapper">
      <div
        id="character-cash"
        class="stuff-controls">
        <i class="fi flaticon-purse"></i>
        <span>{{`${cash.currency}${cash.amount}`}}</span>
      </div>
      <div
        id="game-time"
        class="stuff-controls">
        <i class="fi flaticon-clock-circular-outline"></i>
        <span>{{ timeInGame | moment("mm:ss") }}</span>
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
    created () {
      this.$store.dispatch('character/START_TIME_IN_GAME')
    },
    computed: {
      ...mapGetters(
        {
          inArms: 'armory/inArms',
          cash: 'character/cash',
          timeInGame: 'character/timeInGame',
        }
      )
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  #character-stuff-board{
    max-width: 30vh;
    height: 6vh;
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
      margin: 0 .5vh;
      .stuff-controls{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 .4vh;
        padding-top: .6vh;
        color: #fff;
        font-weight: bold;
        font-size: 1.8vh;
        i{
          margin-right: .4vh;
        }
      }
    }
  }
</style>