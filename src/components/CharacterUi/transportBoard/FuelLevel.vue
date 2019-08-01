<template>
  <div
    id="fuel-level"
    :class="fuelLevelClass">
    <div id="fuel-scale-points">
      <div
        v-for="(point, index) in fuelLevel"
        :key="index"
        :style="{flexGrow: maxPointsSize ? .1 : 0}"
        class="scale-point"></div>
    </div>
    <div
      :style="{maxWidth: `${maxPointsSize ? maxPointsSize*2 : 1}vh`}"
      id="fuel-main-indicator">
      <i class="fi flaticon-fuel"></i>
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
        min-width: 1.4vh;
        height: .5vh;
        margin-right: .3vh;
        flex-grow: 1;
        &:last-child{
          margin-right: 0;
        }
      }
    }
    #fuel-main-indicator{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 2vh;
      height: 5vh;
      position: relative;
    }
  }
</style>