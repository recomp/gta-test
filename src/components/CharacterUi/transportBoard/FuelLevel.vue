<template>
  <div
    id="fuel-level"
    :class="fuelLevelClass">
    <div id="fuel-scale-points">
      <div
        v-for="(point, index) in fuelLevel"
        :key="index"
        :style="{maxWidth: `${maxPointsSize}vw`}"
        class="scale-point"></div>
    </div>
    <div
      :style="{maxWidth: `${maxPointsSize ? maxPointsSize*2 : 1}vw`}"
      id="fuel-main-indicator">
    </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  export default {
    name: 'fuelLevel',
    components: {

    },
    computed: {
      ...mapGetters({
        fuelCapacity: 'transport/fuelCapacity',
        fuelLevel: 'transport/fuelLevel'
      }),
      fuelLevelClass(){
        return 'full'
      },
      maxPointsSize(){
        return this.fuelLevel < 4 ? '1' : '1.5'
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  #fuel-level{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    background: transparent;
    justify-content: flex-end;
    &.full{
      #fuel-main-indicator, .scale-point{
          background-color: yellow;
      }
    }
    #fuel-scale-points{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      flex-grow: 1;
      .scale-point{
        min-width: .7vw;
        height: .5vh;
        margin-right: .2vw;
        &:last-child{
          margin-right: 0;
        }
      }
    }
    #fuel-main-indicator{
      width: 1.7vw;
      height: 4.5vh;
      position: relative;
      // flex-grow: 1;
      background: {
        repeat: no-repeat;
        position: center;
        image: url('/images/fuel-main-icon.png');
      }
    }
  }
</style>