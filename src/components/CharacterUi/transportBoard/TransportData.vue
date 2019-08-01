<template>
  <div id="transport-data">
    <div
      id="transport-lock"
      class="transport-data-controls lock" />
    <div
      id="transport-crash-status"
      class="transport-data-controls lock" />
    <div
      id="transport-light"
      :class="carHeadlightClass"
      class="transport-data-controls" />
    <div
      id="transport-speed"
      class="off">
      {{transportSpeed.data}}<sub>{{transportSpeed.unit}}</sub>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  export default {
    name: 'transportData',
    computed: {
      ...mapGetters({
        headLightOn: "transport/headLightOn",
        fuelCapacity: 'transport/fuelCapacity',
        fuelLevel: 'transport/fuelLevel',
        speed: 'transport/speed',
      }),
      carHeadlightClass() {
        return this.headLightOn ? 'on' : 'off';
      },
      transportSpeed(){
        return {data: this.speed, unit: 'км/ч'}
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  #transport-data{
    position: absolute;
    top: 0;
    z-index: 10;
    display: block;
    width: 93%;
    height: 4vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    // background: #000;
    overflow: hidden;

    .transport-data-controls{
      width: 1.9vw;
      margin-right: .7vw;
      &:last-child{
        margin-right: 0;
      }
      // background: rgba(255, 255, 255, .5);
      background: {
        repeat: no-repeat;
        position: center;
      }
    }
    #transport-lock{
      &.lock{
        background-image: url('/images/transport-lock-icon.png');
      }
    }
    #transport-light{
      &.on{
        background-image: url('/images/light-on.png');
      }
      &.off{
        background-image: url('/images/light-off.png');
      }
    }
    #transport-crash-status{
      background-image: url('/images/transport-crash-50.png');
    }
    #transport-speed{
      flex-grow: 1;
      max-width: 4.3vw;
      line-height: 4vh;
      font-size: 3vh;
      color: #fff;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      sub{
        position: relative;
        bottom: .8vh;
        font-size: 1vh;
      }
    }
  }
</style>